import type { HttpFunction, Request, Response } from '@google-cloud/functions-framework';
import dotenv from 'dotenv';
import path from 'path';
const envPath = path.resolve(path.join(__dirname, './env.vault'));

dotenv.config({
  path: envPath,
  DOTENV_KEY:
    'dotenv://:key_846174a2e4d30c989d33cbaec3ffd7f0f9a5b6606f03d537dd024219025a618b@dotenv.org/vault/.env.vault?environment=development',
});
console.log('+++ path', envPath);
console.log(JSON.stringify(process.env, null, 2));

export const envMiddleWare = (next: HttpFunction) => async (req: Request, res: Response) =>
  await next(req, res);
export const withEnv = <T>(callback: () => T): T => callback();
