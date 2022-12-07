const { rootDir } = require('./utils');

const packagesDir = `${rootDir}/packages`;
const packageTemplatesDir = `./templates/package`;

module.exports = function (plop) {
  // create your generators here
  plop.setGenerator('basics', {
    description: 'Create new package',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your package name?',
      },
    ], // array of inquirer prompts
    actions: [
      {
        type: 'add',
        path: `${packagesDir}/{{name}}/package.json`,
        templateFile: `${packageTemplatesDir}/PackageJSON.js.hbs`,
      },
      {
        type: 'add',
        path: `${packagesDir}/{{name}}/index.ts`,
        templateFile: `${packageTemplatesDir}/PackageIndex.js.hbs`,
      },
    ],
  });
};
