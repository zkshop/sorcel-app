import type { VercelRequest, VercelResponse } from '@vercel/node';
import { magicSDK } from 'magic-server-sdk';
import { INTERNAL_SERVER_ERROR, OK, UNAUTHORIZED } from 'http-status';
import { allowCors } from '../../../middlewares/allowCors';
import { method } from '../../../middlewares/method';
import { AuthorizationTokenService } from 'domains';
import { JsonWebTokenClient } from '../../../infra/JsonWebTokenClient';
import { getUser } from '../../../utils';

const Token = AuthorizationTokenService(JsonWebTokenClient());

async function handler(req: VercelRequest, res: VercelResponse) {
  if (!process.env.JWT_SECRET) {
    res.status(INTERNAL_SERVER_ERROR).json({ message: 'Server Error' });
    return;
  }

  try {
    const didToken = req.headers.authorization?.substring(7);
    magicSDK.token.validate(didToken || '');
    const metadata = await magicSDK.users.getMetadataByToken(didToken || '');

    if (!metadata.email) {
      res.status(INTERNAL_SERVER_ERROR).json({
        message: 'Server Error',
      });
      return;
    }

    const user = await getUser(metadata.email);

    if (!user) {
      res.status(UNAUTHORIZED).json({ message: 'Unauthorized' });
      return;
    }

    const token = Token.sign(user.app_id, metadata);

    res.status(OK).send({ token });
  } catch (error) {
    console.error(error);
    res.status(INTERNAL_SERVER_ERROR).json({ error });
  }
}

export default allowCors(method('POST', handler));
