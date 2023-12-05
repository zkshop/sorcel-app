import { Request, Response } from 'express';
import { AuthorizationTokenService } from '@3shop/domains';
import { OK, UNAUTHORIZED } from 'http-status';
import { JsonWebTokenClient } from '../../../../../infra/JsonWebTokenClient';
import { extractTokenFromAuthorization } from '../../../../../utils';

const Token = AuthorizationTokenService(JsonWebTokenClient());

export async function verify(req: Request, res: Response) {
  const token = extractTokenFromAuthorization(req.headers.authorization);
  if (!token || !Token.verify(token)) return res.status(UNAUTHORIZED).end();

  const userPayload = Token.getUserPayload(token);

  return res.status(OK).send(userPayload);
}

