import type { VercelRequest, VercelResponse } from '@vercel/node';
import { magicSDK } from '@3shop/magic-server-sdk';
import { INTERNAL_SERVER_ERROR, OK, UNAUTHORIZED } from 'http-status';
import { allowCors } from '../../../middlewares/allowCors';
import { method } from '../../../middlewares/method';
import { AuthorizationTokenService } from '@3shop/domains';
import { JsonWebTokenClient } from '../../../infra/JsonWebTokenClient';
import { extractTokenFromAuthorization, getUser } from '../../../utils';
import { envVars } from '@3shop/config';

const Token = AuthorizationTokenService(JsonWebTokenClient());

async function handler(req: VercelRequest, res: VercelResponse) {
  if (!envVars.SECRET_JWT) return res.status(INTERNAL_SERVER_ERROR);
  console.log('+++', req.headers.authorization);

  const didToken = extractTokenFromAuthorization(req.body.didToken);

  if (!didToken) return res.status(UNAUTHORIZED);

  try {
    magicSDK.token.validate(didToken);
    const metadata = await magicSDK.users.getMetadataByToken(didToken);

    if (!metadata.email) return res.status(INTERNAL_SERVER_ERROR);

    const user = await getUser(metadata.email);

    if (!user) return res.status(UNAUTHORIZED);

    const token = Token.sign(user.app_id, metadata);

    return res.status(OK).send({ token });
  } catch (error) {
    return res.status(INTERNAL_SERVER_ERROR).json({ error });
  }
}

export default allowCors(method('POST', handler));
