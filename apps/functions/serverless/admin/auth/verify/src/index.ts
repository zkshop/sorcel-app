import { AuthorizationTokenService } from '@3shop/domains';
import { OK, UNAUTHORIZED } from 'http-status';
import { JsonWebTokenClient } from '../../../../../infra/JsonWebTokenClient';
import { extractTokenFromAuthorization } from '../../../../../utils';
import type { HttpFunction } from '@google-cloud/functions-framework';
import { envMiddleWare, allowCors } from '../../../../middlewares';

const Token = AuthorizationTokenService(JsonWebTokenClient());

const handler: HttpFunction = async (req, res) => {
  const token = extractTokenFromAuthorization(req.body.didToken);

  if (!token || !Token.verify(token)) return res.status(UNAUTHORIZED).end();

  const userPayload = Token.getUserPayload(token);

  return res.status(OK).send(userPayload);
};

export const verify = envMiddleWare(allowCors(handler));
