import { Request, Response } from 'express';
import { AuthorizationTokenService } from '@3shop/domains';
import { OK, UNAUTHORIZED } from 'http-status';
import { JsonWebTokenClient } from '../../../../../infra/JsonWebTokenClient';
import { extractTokenFromAuthorization } from '../../../../../utils';
import { HttpFunction } from '@google-cloud/functions-framework';
import { envMiddleWare, allowCors, withEnv } from '../../../../middlewares';

const Token = AuthorizationTokenService(JsonWebTokenClient());

const handler: HttpFunction = async (req, res) => {
  const token = extractTokenFromAuthorization(req.headers.authorization);
  if (!token || !Token.verify(token)) return res.status(UNAUTHORIZED).end();

  const userPayload = Token.getUserPayload(token);

  return res.status(OK).send(userPayload);
}

export const verify = envMiddleWare(allowCors(handler));
