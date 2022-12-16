import { TokenService } from 'domains';
import { PaperWalletClient } from '../infra/PaperWalletClient';
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { allowCors } from '../middlewares/allowCors';
import { INTERNAL_SERVER_ERROR, OK } from 'http-status';
import { method } from '../middlewares/method';

const Token = TokenService(PaperWalletClient());

async function handler(req: VercelRequest, res: VercelResponse) {
  const { code } = req.body as { code: string };

  try {
    const userToken = await Token.getToken(code);

    res.status(OK).json({ userToken });
  } catch (e) {
    console.error({ e });

    res.status(INTERNAL_SERVER_ERROR).json(e);
  }
}

export default method('POST', allowCors(handler));
