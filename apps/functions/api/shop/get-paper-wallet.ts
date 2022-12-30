import { AuthService } from '@3shop/domains';
import { UserAuthenticationClient } from '../../infra/UserAuthenticationClient';
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { allowCors } from '../../middlewares/allowCors';
import { INTERNAL_SERVER_ERROR, OK } from 'http-status';
import { method } from '../../middlewares/method';

const Auth = AuthService(UserAuthenticationClient());

async function handler(req: VercelRequest, res: VercelResponse) {
  const { code } = req.body as { code: string };

  try {
    const paperWallet = await Auth.loginWithPaper(code);

    return res.status(OK).json(paperWallet);
  } catch (e) {
    console.error(e);

    return res.status(INTERNAL_SERVER_ERROR).send({ message: 'Error when requesting the wallet ' });
  }
}

export default allowCors(method('POST', handler));
