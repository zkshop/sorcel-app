import { TokenService } from '../domains/TokenService';
import { PaperWalletClient } from '../infra/PaperWalletClient';
import { VercelRequest, VercelResponse } from '@vercel/node';

const Token = TokenService(PaperWalletClient());

export default async function handler(req: VercelRequest, res: VercelResponse) {
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
