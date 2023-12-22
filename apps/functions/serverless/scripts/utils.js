import fs from 'fs';
import crypto from 'crypto';

export const camelCaseToSnakeCase = (input) => {
  if (!input) return undefined;
  return input.replace(/([A-Z])/g, (match) => `_${match.toLowerCase()}`);
};

export const kebabCaseToCamelCase = (input) => {
  if (!input) return undefined;
  return input.replace(/(-\w)/g, (match) => match[1].toUpperCase());
};

export const snakeCaseToKebabCase = (input) => {
  if (!input) return undefined;
  return input.replace(/_/g, '-');
};

export const camelCaseToKebabCase = (input) => snakeCaseToKebabCase(camelCaseToSnakeCase(input));
// Arguments
export class UnknownArgumentException extends Error {
  constructor(arg) {
    super(`Unknown argument: ${arg}`);
    this.name = 'UnknownArgumentException';
  }
}
// Env
export class MandatoryEnvException extends Error {
  constructor(key, allKeys) {
    if (allKeys) {
      super(`Env variable \'${key}\' is missing: ${JSON.stringify(allKeys)}`);
    } else {
      super(`This env is required: ${key}`);
    }
    this.name = 'MandatoryEnvException';
  }
}

export function getArgs(optionsConfig, args) {
  const assignKey = (obj, key, value) => {
    const parser = optionsConfig['parseArgs'];
    const method = parser && parser.get(key);
    if (method) {
      obj[key] = method(value);
    } else {
      obj[key] = value;
    }
  };

  let options = (args && args) || { ...optionsConfig.defaultOptions };
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg.startsWith('--')) {
      const [key, value] = arg.slice(2).split('=');
      if (!optionsConfig.supportedOptions.includes(key)) {
        throw new UnknownArgumentException(key);
      }
      assignKey(options, key, value);
      // options[key] = value;
    }
  }
  return options;
}

export function createHashStringForFile(filePath) {
  const fileBuffer = fs.readFileSync(filePath);
  const hashSum = crypto.createHash('md5');
  hashSum.update(fileBuffer);

  return hashSum.digest('hex');
}

export const getHashFromFile = async (filePath) => {
  if (fs.existsSync(`${filePath}.hash`)) return fs.readFileSync(`${filePath}.hash`, 'utf8').replace(/\n/g, '');;
  return undefined;
};

export const compareHash = (prev, _new, callback) => {
  if (!prev) return true;
  return prev != _new;
};

export const jsonToBash = (data) => {
  const command = data.command;
  const args = data.args;
  let result = `${command}`;
  const entries = Object.entries(args);

  entries.forEach(([key, value], index) => {
    result = `${result} --${camelCaseToKebabCase(key)}`;
    if (value != 'enabled') result = `${result}=${value}`;
    // if (index != entries.length - 1) result = `${result}`;
  });
  return [
    result,
    data,
  ]
}
