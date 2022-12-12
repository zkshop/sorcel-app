import { TokenService } from 'domains';
import { PaperWalletClient } from '../infra/PaperWalletClient';
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { allowCors } from '../middlewares/allowCors';

const Token = TokenService(PaperWalletClient());

async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(404).json({ error: 'Method not allowed' });
  }

  const { code } = req.body as { code: string };

  try {
    const userToken = await Token.getToken(code);

    res.status(200).json({ userToken });
  } catch (e) {
    console.error({ e });

    res.status(500).json(e);
  }
}

export default allowCors(handler);
