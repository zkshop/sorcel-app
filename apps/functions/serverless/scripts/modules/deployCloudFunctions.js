import { createFunctions, createDeployCommand, Function, cleanup } from '../lib/functions.js';
import { log } from '../display.mjs';

// createFunctions();
Function.allFunctions.forEach((f) => createDeployCommand(f));
export const inline = (command) =>
  command
    .split(/[\\\n ]/)
    .filter((s) => s != '')
    .join(' ');

export const randomCommand = () => {
  return Math.random() < 0.5 ? 'false' : 'sleep 3';
}

    
async function deployCloudFunctions(callback, silent) {
  const promises = Function.allFunctions.map((f, index) => {
    const commands = ['bun i', 'bun bundle', inline(f.deployCommand)];
    return f.do(commands, undefined, (process, index) => {
      callback && callback(f, process, index);
      if (!silent) {
        switch (index) {
          case 0:
            console.log(`${f.name}: installing packages`);
            break;
          case 1:
            console.log(`${f.name}: running esbuild`);
            break;
          case 2:
            process.stderr.on('data', (data) => {
              console.error(`stderr: ${data}`);
            });

            process.on('close', (code) => {
              if (code != 0) {
                cleanup();
                console.log(`${f.entryPointName}: KO`);
                throw new Error(`Failed to execute ${commands[index]} for function ${f.name}`);
              } else console.log(`${f.entryPointName}: OK`);
            });
            console.log(`${f.entryPointName}: deploying`);
            break;
          default:
            break;
        }
      }
    }, silent);
  });
  await Promise.all(promises);
  console.log('dsfgdfg');
}

export default deployCloudFunctions;
