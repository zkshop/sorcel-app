const { execSync } = require('child_process');
const scriptName = "deploy";
const bundleFileName = "index.cjs";
const splitPathIntoArray = (path) => path.split('/');
const getFunctionName = (path) => {
    const parts = splitPathIntoArray(path);
    return parts[parts.length - 2];
}
const isBashScript = (path) =>
    path.charAt(path.length - 2) == 's' && path.charAt(path.length - 1) == 'h';

const isDeployScript = (path) => {
    if (!isBashScript)
        return false;
    const split = splitPathIntoArray(path);
    const scriptIndex = split[split.length - 1];
    return scriptIndex.split('.')[0] == scriptName;
}

const getJsFile = (path) => {
    let parts = path.split('/');
    parts.pop();
    parts = [...parts, bundleFileName];
    return parts.join('/');
}

const getSrc = (path) => {
    let parts = path.split('/');
    parts.pop();
    parts = [...parts, 'src'];
    return parts.join('/');
}

const toCamelCase = (input) => {
    if (!input)
        return undefined;
    // Check if the input is already in camelCase
    const isCamelCase = /^[a-z]+([A-Z][a-z]*)*$/.test(input);
    if (isCamelCase)
        return input;
    return input
        .split('-')
        .map((part, index) => {
            if (index === 0) {
                return part.toLowerCase();
            }
            return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
        })
        .join('');
}

(() => {
    const ripGrepFindDeployScripts = "rg --files-with-matches '__CF' .";
    const findDeployScripts = () => execSync(`zsh -c "${ripGrepFindDeployScripts}"`, { encoding: 'utf-8' });

    const deployScriptsOutput = findDeployScripts().split('\n');
    const functions = [];

    for (let i = 0; i < deployScriptsOutput.length; i++) {
        const path = deployScriptsOutput[i];
        if (!isDeployScript(path))
            continue;
        const name = getFunctionName(path);
        const entryPointName = toCamelCase(name);
        const jsFile = getJsFile(path);
        const srcPath = getSrc(path);
        functions.push({
            path,
            srcPath,
            jsFile,
            name,
            entryPointName,
        });
    }
    const fs = require('fs');
    let content = 'import express from \'express\';\n';
    const createImport = (_function) => {
        return `import { ${_function.entryPointName} } from \'../.${_function.srcPath}\';`;
    };
    const createExpressUse = (_function) => {
        return `app.use(\'/${_function.name}\', ${_function.entryPointName});`;
    }
    const writeContent = (line) => content = `${content}\n${line}`;
    const writeEndl = () => content = `${content}\n`;
    // imports
    functions.forEach(_function => {
        writeContent(createImport(_function));
    });
    for (let i = 0; i < 2; i++) writeEndl();
    // app.use
    writeContent('const app = express();');
    functions.forEach(_function => {
        writeContent(createExpressUse(_function));
    });
    writeEndl();
    // export
    const allEntryPoints = functions.map(_f => _f.entryPointName);
    writeContent(`export { app as index, ${allEntryPoints.join(', ')} };`);
    // write file
    fs.writeFileSync('./runAll/src/index.ts', content);

    // const deployScripts = splitPathIntoArray(deployScriptsOutput);
    console.log(`Created routes`, functions.map(_f => _f.name));
})();