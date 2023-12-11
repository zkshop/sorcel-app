import { execSync, exec, spawn } from 'child_process';
import { camelCaseToKebabCase } from './utils.mjs';
import { inline } from './gcf.mjs';

const scriptName = 'deploy';
const bundleFileName = 'index.cjs';
const endPointDefaultPrefix = ['api'];
export const enabled = '(enabled)';
export const createDeployCommand = (_function) => {
  let result = `gcloud functions deploy ${_function.name}`;
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
    source: '.',
    memory: '256MB',
    maxInstances: 83,
    entryPoint: _function.entryPointName,
  };
};

const runningProcess = [];

global.process.on('SIGINT', () => {
  runningProcess.forEach((process) => {
    try {
      process.kill(pid, 0);
      process.kill(pid, 'SIGTERM');
    } catch (e) {
      console.log(e);
    }
  });
  console.log('+++KILLED', runningProcess);
});

class Function {
  constructor(path, name, entryPointName, prefix) {
    this.path = path;
    this.name = name;
    this.entryPointName = entryPointName;
    this.prefix = prefix;
    this.deployOptions = {
      ...defaultDeployOptions(this),
    };
    this.deployCommand = undefined;
  }

  setDeployCommand(command) {
    this.deployCommand = command;
  }

  /**
   * Executes a series of commands in the specified directory.
   * @param {string[]} commands - The commands to be executed.
   * @param {string} [cwd] - The current working directory for the commands. Defaults to the function's path.
   * @param {function} callback - The callback function to be executed after each command.
   * @param {object} process - The child process object.
   * @param {number} index - The index of the executed command.
   */
  do(commands, cwd, callback) {
    const executeCommand = (index) => {
      const allCommandsExecuted = index >= commands.length;
      if (allCommandsExecuted)
        return;

      const command = commands[index];
      const splitCommand = command.split(' ');
      const args = splitCommand.slice(1);
      const process = spawn(splitCommand[0], args, { cwd: cwd || this.path });

      callback && callback(process, index);

      runningProcess.push(process);
      process.on('close', (code) => executeCommand(index + 1));
    };

    executeCommand(0);
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

export function createFunctions() {
  const ripGrepFindDeployScripts = `rg --files-with-matches '__CF' ${process.env.PWD}`;
  const findDeployScripts = () =>
    execSync(`zsh -c "${ripGrepFindDeployScripts}"`, { encoding: 'utf-8' });

  let deployScriptsOutput = findDeployScripts().split('\n');
  const functions = [];

  for (let i = 0; i < deployScriptsOutput.length; i++) {
    let path = deployScriptsOutput[i];
    if (!isDeployScript(path)) continue;
    let pathSplit = splitPathIntoArray(path);
    pathSplit.pop();
    path = pathSplit.join('/');
    const name = getFunctionName(path);
    const entryPointName = toCamelCase(name);
    const prefix = createEndPointPrefix(path);
    functions.push(new Function(path, name, entryPointName, prefix));
  }
  return functions;
}
