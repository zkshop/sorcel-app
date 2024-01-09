import type { HttpFunction, Request, Response } from '@google-cloud/functions-framework';
import findConfig from 'find-config';
import dotenv from 'dotenv';

const envPath = findConfig('.env.vault');
if (envPath) {
  console.log('env found', envPath);
  dotenv.config({
    path: envPath,
    DOTENV_KEY: process.env.DOTENV_KEY,
  });
} else console.error('failed to load environment');

export const envMiddleWare = (next: HttpFunction) => async (req: Request, res: Response) => {
  await next(req, res);
};
export const withEnv = <T>(callback: () => T, label?: string): T => {
  label && console.log(`withEnv: ${label}`);
  return callback();
};
