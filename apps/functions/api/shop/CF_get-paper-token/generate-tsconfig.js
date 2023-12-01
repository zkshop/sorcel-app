// generate-tsconfig.js
import fs from 'fs';
import path from 'path';

const projectRoot = process.env.SORCEL_PROJECT_ROOT || './';
const packagePath = path.join(projectRoot, 'packages', '*');
const infraPath = path.join(projectRoot, 'apps', 'functions', 'infra', '*');

const tsconfig = {
    compilerOptions: {
        target: "es2016",
        module: "esnext",
        esModuleInterop: true,
        forceConsistentCasingInFileNames: true,
        moduleResolution: "node", // Add this line
        strict: true,
        skipLibCheck: true,
        baseUrl: "./src", // This should be the base directory of your TypeScript source files
        paths: {
            "@3shop/*": [packagePath], // Adjust the relative path as necessary
            "@infra/*": [infraPath]
        }
    }
}

fs.writeFileSync('tsconfig.json', JSON.stringify(tsconfig, null, 2));