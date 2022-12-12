import type { VercelApiHandler, VercelRequest, VercelResponse } from '@vercel/node';
import { METHOD_NOT_ALLOWED } from 'http-status';

type HTTP_METHOD = 'GET' | 'OPTIONS' | 'PATCH' | 'DELETE' | 'POST' | 'PUT';

type MethodMiddleware = (
  method: HTTP_METHOD,
  fn: VercelApiHandler,
) => (req: VercelRequest, res: VercelResponse) => Promise<void>;

export const method: MethodMiddleware = (method, fn) => async (req, res) => {
  if (req.method !== method) {
    res.status(METHOD_NOT_ALLOWED).json({ message: 'Method Not Allowed' });
    return;
  }

  return await fn(req, res);
};
