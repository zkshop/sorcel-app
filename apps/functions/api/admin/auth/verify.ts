import type { VercelRequest, VercelResponse } from '@vercel/node';
import { AuthorizationTokenService } from '@3shop/domains';
import { NO_CONTENT, UNAUTHORIZED } from 'http-status';
import { JsonWebTokenClient } from '../../../infra/JsonWebTokenClient';
import { allowCors } from '../../../middlewares/allowCors';
import { method } from '../../../middlewares/method';
import { extractTokenFromAuthorization } from '../../../utils';

const Token = AuthorizationTokenService(JsonWebTokenClient());

async function handler(req: VercelRequest, res: VercelResponse) {
  const token = extractTokenFromAuthorization(req.headers.authorization);

  if (!token || !Token.verify(token)) return res.status(UNAUTHORIZED).end();

  return res.status(NO_CONTENT).end();
}

export default allowCors(method('GET', handler));
