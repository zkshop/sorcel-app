import type { VercelRequest, VercelResponse } from '@vercel/node';
import { AuthorizationTokenService } from '@3shop/domains';
import { OK, UNAUTHORIZED } from 'http-status';
import { JsonWebTokenClient } from '../../../infra/JsonWebTokenClient';
import { allowCors } from '../../../middlewares/allowCors';
import { method } from '../../../middlewares/method';
import { extractTokenFromAuthorization } from '../../../utils';

const Token = AuthorizationTokenService(JsonWebTokenClient());

async function handler(req: VercelRequest, res: VercelResponse) {
  const token = extractTokenFromAuthorization(req.headers.authorization);
  if (!token || !Token.verify(token)) return res.status(UNAUTHORIZED).end();

  const userPayload = Token.getUserPayload(token);

  return res.status(OK).send(userPayload);
}

export default allowCors(method('GET', handler));
