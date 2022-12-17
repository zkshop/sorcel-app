import type { VercelRequest, VercelResponse } from '@vercel/node';
import { METHOD_NOT_ALLOWED } from 'http-status';

type HTTP_METHOD = 'GET' | 'OPTIONS' | 'PATCH' | 'DELETE' | 'POST' | 'PUT';
export type Handler = (req: VercelRequest, res: VercelResponse) => Promise<VercelResponse>;

type MethodMiddleware = (method: HTTP_METHOD, fn: Handler) => Handler;

export const method: MethodMiddleware = (method, fn) => async (req, res) => {
  if (req.method !== method) {
    return res.status(METHOD_NOT_ALLOWED);
  }

  return await fn(req, res);
};
