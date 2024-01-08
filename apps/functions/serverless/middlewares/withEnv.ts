import type { HttpFunction, Request, Response } from '@google-cloud/functions-framework';
import dotenv from 'dotenv';
import path from 'path';

let envPath = path.join(__dirname, '..', '..', '.env.vault');
console.log("!envPath", envPath);

dotenv.config({
  path: envPath,
  DOTENV_KEY: process.env.DOTENV_KEY,
});

export const envMiddleWare = (next: HttpFunction) => async (req: Request, res: Response) => {
  await next(req, res);
};
export const withEnv = <T>(callback: () => T, label?: string): T => {
  label && console.log(`withEnv: ${label}`);
  return callback();
};
