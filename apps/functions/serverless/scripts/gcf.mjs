import { createFunctions, createDeployCommand } from './functions.mjs';
import { log } from './display.mjs';

const functions = createFunctions();
functions.forEach((f) => createDeployCommand(f));
export const inline = (command) =>
  command
    .split(/[\\\n ]/)
    .filter((s) => s != '')
    .join(' ');


for (let i = 0; i < functions.length; i++) {
  if (i == 2) break;
  const f = functions[i];

  f.do(['bun i', 'bun bundle', inline(f.deployCommand)], undefined, (process, index) => {
    switch (index) {
      case 0:
        console.log(`${f.name}: installing packages`);
        break;
      case 1:
        console.log(`${f.name}: running esbuild`);
        break;
      case 2:
        process.on('close', (code) => {
          if (code != 0) console.log(`${f.entryPointName}: KO`);
          else console.log(`${f.entryPointName}: OK`);
        });
        console.log(`${f.entryPointName}: deploying`);
        break;
      default:
        break;
    }
  });
}
