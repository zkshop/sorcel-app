import { Function } from '../lib/functions.js';
import { getArgs } from '../utils.js';
import fs from 'fs';
import yaml from 'js-yaml';
import { log } from '../display.mjs';

export const endPointDefaultPrefix = ['api'];
export const supportedOptions = [
  'yaml-outfile',
  'template-path',
  'ignore-functions',
  'include-only',
];
export const defaultOptions = {
  'yaml-outfile': './scripts/api-gateway-openapi.yaml',
  'template-path': `./scripts/template.yaml`,
};

function createOpenApiObject(_function, keysToExtract) {
  const config = Function.getConfig(_function.id);
  let openApi = { ...config['openapi'] };
  if (!openApi || !Object.entries(openApi).length)
    throw new Error('Failed to get openApi object from config');
  const requiredForApiGateWay = {
    'x-google-backend': {
      address: `https://${process.env.GCP_REGION}-${process.env.GCP_PROJECT}.cloudfunctions.net/${_function.name}-${process.env['ENV_CONTEXT']}`,
    },
    operationId: _function.entryPointName,
  };

  function locateRestMethodToAppendRequired(obj) {
    if (typeof obj !== 'object' || obj === null) return;
    const restMethods = ['get', 'post', 'put', 'delete', 'patch', 'options', 'head'];
    for (let key in obj) {
      if (restMethods.includes(key.toLowerCase()) && typeof obj[key] === 'object') {
        obj[key] = { ...requiredForApiGateWay, ...obj[key] };
        return;
      }
      locateRestMethodToAppendRequired(obj[key]);
    }
  }

  locateRestMethodToAppendRequired(openApi);
  Object.freeze(openApi);
  return openApi;
}

const loadYaml = (path) => {
  const file = fs.readFileSync(path, 'utf-8');
  const json = yaml.load(file);

  return {
    file,
    json,
  };
};
async function generateYaml(args) {
  const options = getArgs(
    {
      supportedOptions,
      defaultOptions,
    },
    args || process.argv.slice(2),
  );

  const { file, json } = loadYaml(options['template-path']);
  let paths = {};
  let buildingYaml = { ...json };
  let allDefinitions = {};
  const securityDefinitions = { ...buildingYaml['securityDefinitions'] };
  delete buildingYaml['securityDefinitions'];

  Function.allFunctions.forEach((f) => {
    try {
      const openApi = createOpenApiObject(f);
      const prefixWithouBasePath = f.prefix
        .split('/')
        .slice(endPointDefaultPrefix.length)
        .join('/');
      paths[`/${prefixWithouBasePath}`] = openApi;
    } catch (e) {
      console.error(e);
    }
  });
  Object.freeze(paths);

  buildingYaml['paths'] = paths;
  buildingYaml['securityDefinitions'] = securityDefinitions;
  buildingYaml['definitions'] = allDefinitions;

  const yamlStr = yaml.dump(buildingYaml);
  await fs.promises.writeFile(options['yaml-outfile'], yamlStr, 'utf8');
  return options['yaml-outfile'];
}

export default generateYaml;
