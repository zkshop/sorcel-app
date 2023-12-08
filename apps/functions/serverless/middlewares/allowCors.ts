import { HttpFunction, Request, Response } from '@google-cloud/functions-framework';
import { OK } from 'http-status';

export const allowCors = (next: HttpFunction) => async (req: Request, res: Response) => {
  res.set('Access-Control-Allow-Credentials', 'true');
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.set(
    'Access-Control-Allow-Headers',
    'Access-Control-Allow-Origin, Authorization, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
  );

  if (req.method === 'OPTIONS') {
    return res.status(OK).end();
  }

  return await next(req, res);
};
