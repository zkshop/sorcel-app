import type { HttpFunction, Request, Response } from '@google-cloud/functions-framework';
import dotenv from 'dotenv';
import path from 'path';

// import { exec } from 'child_process';
// console.log(__dirname);

// exec(`ls -la` + __dirname, (error, stdout, stderr) => {
//   if (error) {
//     console.error(`Error: ${error.message}`);
//     return;
//   }
//   if (stderr) {
//     console.error(`Stderr: ${stderr}`);
//     return;
//   }
//   console.log(`Stdout: ${stdout}`);
// });

let envVaultPath = path.join(__dirname, '..', '..', '.env.vault');
console.log('envVault: ', envVaultPath);
dotenv.config({
  path: envVaultPath,
  DOTENV_KEY: process.env.DOTENV_KEY,
});

// console.log('Process Environment Variables:', JSON.stringify(process.env, null, 2));

export const envMiddleWare = (next: HttpFunction) => async (req: Request, res: Response) => {
  await next(req, res);
};
export const withEnv = <T>(callback: () => T): T => callback();
