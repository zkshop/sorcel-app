import type { VercelRequest, VercelResponse } from '@vercel/node';
import { AuthTokenValidationService } from '@3shop/domains';
import { INTERNAL_SERVER_ERROR, OK } from 'http-status';
import { allowCors } from '../../middlewares/allowCors';
import { method } from '../../middlewares/method';
import { UserTokenValidationClient } from '../../infra/UserTokenValidationClient';

const tokenValidationService = AuthTokenValidationService(UserTokenValidationClient());

async function validateToken(token: string) {
  try {
    tokenValidationService.validate(token);
  } catch (error) {
    throw error;
  }
}

async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const token = req.headers.authorization?.substring(7) || '';
    await validateToken(token);
    return res.status(OK).json({ authenticated: true });
  } catch (error) {
    return res.status(INTERNAL_SERVER_ERROR).json({ error });
  }
}

export default allowCors(method('POST', handler));
