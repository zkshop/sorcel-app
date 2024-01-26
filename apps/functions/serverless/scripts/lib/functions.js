import { execSync, exec, spawn } from 'child_process';
import { camelCaseToKebabCase } from '../utils.js';
import { verbose } from '../deployment/deploy.js';

const scriptName = 'deploy';
const bundleFileName = 'index.cjs';
const endPointDefaultPrefix = ['api'];
export const enabled = '(enabled)';

const isSlug = (str) => str.startsWith('[') && str.endsWith(']');

const withoutSlug = (str) => {
  if (isSlug(str)) {
    return str.slice(1, -1);
  }
  return str;
};

const createEndPointPrefix = (path) => {
  const parts = splitPathIntoArray(path).filter((s) => s != '');
  const cwdSplit = splitPathIntoArray(process.cwd()).filter((s) => s != '');
  const fromCwd = parts.slice(cwdSplit.length).filter(part => !isSlug(part));

  return [...endPointDefaultPrefix, ...fromCwd].join('/');
};

export const createDeployCommand = (_function) => {
  let result = `gcloud functions deploy ${_function.name}-${process.env.ENV_CONTEXT}`;
  const entries = Object.entries(_function.deployOptions);

  entries.forEach(([key, value], index) => {
    result = `${result}\n\ --${camelCaseToKebabCase(key)}`;
    if (value != enabled) result = `${result}=${value}`;
    if (index != entries.length - 1) result = `${result} \\`;
  });
  _function.setDeployCommand(result);
};

export const defaultDeployOptions = (_function) => {
  return {
    runtime: 'nodejs20',
    gen2: enabled,
    triggerHttp: enabled,
    allowUnauthenticated: enabled,
    region: process.env.GCP_REGION,
    serviceAccount: process.env.SERVICE_ACCOUNT,
    source: '.',
    memory: '256MB',
    maxInstances: 83,
    entryPoint: _function.entryPointName,
  };
};

let runningProcess = [];

export const cleanup = () => {
  runningProcess.forEach((process) => {
    try {
      process.kill('SIGINT');
    } catch (e) {
      console.log(e);
    }
  });
};

global.process.on('SIGINT', cleanup());

export class Function {
  static id = 0;
  static allFunctions = [];

  constructor(path, name, entryPointName, prefix) {
    this.path = path;
    this.name = name;
    this.entryPointName = entryPointName;
    this.prefix = prefix;
    this.id = Function.id++;
    this.deployOptions = {
      ...defaultDeployOptions(this),
    };
    this.deployCommand = undefined;
    this.hash = undefined;
    Function.allFunctions = [...Function.allFunctions, this];
  }

  static getFunctionById(id) {
    return this.allFunctions.find((f) => f.id == id);
  }

  static removeFunctionById(id) {
    this.allFunctions = this.allFunctions.filter((f) => f.id !== id);
  }

  static getConfig(id) {
    const f = this.getFunctionById(id);
    if (!f) throw new Error(`getConfig: function ${id} not found`);
    const config = require(`${f.path}/gcf.json`);
    if (!config) throw new Error(`getConfig: failed to load config for ${id}`);
    return config;
    // const config = require()
  }

  setDeployOptions(callback) {
    this.deployOptions = callback(this.deployOptions);
  }

  setDeployCommand(command) {
    this.deployCommand = command;
  }
  async do(commands, cwd, callback, silent) {
    await _do(commands, this.path, callback, silent);
  }
}
Function.do = _do;
async function _do(commands, cwd, callback, silent, shell = true) {
  const executeCommand = async (command, index) => {
    verbose(() => console.log(`Executing command: ${command}`));
    return new Promise((resolve, reject) => {
      const splitCommand = command.split(' ');
      const args = splitCommand.slice(1);
      const childProcess = spawn(splitCommand[0], args, { cwd: cwd || this.path, shell });

      verbose(() => {
        childProcess.stdout.on('data', (data) => {
          console.log(`stdout: ${data}`);
        });
        childProcess.stderr.on('data', (data) => {
          console.error(`stderr: ${data}`);
        });
      });

      runningProcess.push(childProcess);
      callback && callback(childProcess, index);

      childProcess.on('error', (error) => {
        console.error(`Deploy script Error: ${error}`);
      });

      childProcess.on('close', (code) => {
        runningProcess = runningProcess.filter((p) => p !== childProcess);
        if (code !== 0 && !silent) {
          reject(new Error(`Command failed with exit code ${code}`));
        } else {
          resolve();
        }
      });
    });
  };

  for (let index = 0; index < commands.length; index++) {
    await executeCommand(commands[index], index).catch((e) => {
      // TODO: stop all
      console.error(e);
    });
  }
}

const splitPathIntoArray = (path) => path.split('/');
const getFunctionName = (path) => {
  const parts = splitPathIntoArray(path);
  return parts[parts.length - 1];
};
const isBashScript = (path) =>
  path.charAt(path.length - 2) == 's' && path.charAt(path.length - 1) == 'h';

const isDeployScript = (path) => {
  if (!isBashScript) return false;
  const split = splitPathIntoArray(path);
  const scriptIndex = split[split.length - 1];
  return scriptIndex.split('.')[0] == scriptName;
};

const getJsFile = (path) => {
  let parts = path.split('/');
  parts.pop();
  parts = [...parts, bundleFileName];
  return parts.join('/');
};

const getSrc = (path) => {
  let parts = path.split('/');
  parts.pop();
  parts = [...parts, 'src'];
  return parts.join('/');
};

const toCamelCase = (input) => {
  if (!input) return undefined;
  // Check if the input is already in camelCase
  const isCamelCase = /^[a-z]+([A-Z][a-z]*)*$/.test(input);
  if (isCamelCase) return input;
  return input
    .split('-')
    .map((part, index) => {
      if (index === 0) {
        return part.toLowerCase();
      }
      return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
    })
    .join('');
};

export function createFunctions(includeOnly, ignore) {
  const ripGrepFindDeployScripts = `rg --files-with-matches '__CF' ${process.env.PWD}`;
  const findDeployScripts = () =>
    execSync(`/bin/sh -c "${ripGrepFindDeployScripts}"`, { encoding: 'utf-8' });

  let deployScriptsOutput = findDeployScripts().split('\n');
  const functions = [];
  for (let i = 0; i < deployScriptsOutput.length; i++) {
    let path = deployScriptsOutput[i];
    if (!isDeployScript(path)) continue;
    let pathSplit = splitPathIntoArray(path);
    pathSplit.pop();
    path = pathSplit.join('/');
    const name = withoutSlug(getFunctionName(path));
    const skipFunction =
      (includeOnly && !includeOnly.includes(name)) || (ignore && ignore.includes(name));
    if (skipFunction) continue;

    const entryPointName = toCamelCase(name);
    const prefix = createEndPointPrefix(path);
    functions.push(new Function(path, name, entryPointName, prefix));
  }
  return functions;
}
