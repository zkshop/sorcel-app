import type { VercelRequest, VercelResponse } from '@vercel/node';
import { allowCors } from '../../middlewares/allowCors';
import { TokenService } from '@3shop/domains';
import { PaperWalletClient } from '../../infra/PaperWalletClient';
import { INTERNAL_SERVER_ERROR, OK } from 'http-status';
import { method } from '../../middlewares/method';

const Token = TokenService(PaperWalletClient());

async function handler(req: VercelRequest, res: VercelResponse) {
  const { code } = req.body as { code: string };

  try {
    const userToken = await Token.getToken(code);

    return res.status(OK).json({ userToken });
  } catch (e) {
    console.error({ e });

    return res.status(INTERNAL_SERVER_ERROR).json(e);
  }
}

export default allowCors(method('POST', handler));
