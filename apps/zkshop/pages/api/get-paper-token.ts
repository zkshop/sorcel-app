import { TokenService } from 'domains';
import { PaperWalletClient } from 'infra';
import { NextApiRequest, NextApiResponse } from 'next';

const Token = TokenService(PaperWalletClient());

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
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
