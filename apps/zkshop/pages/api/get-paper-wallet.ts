import { AuthService, TokenService } from 'domains';
import { PaperWalletClient, UserAuthenticationClient } from 'infra';
import { NextApiRequest, NextApiResponse } from 'next';

const Auth = AuthService(UserAuthenticationClient());

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(404).json({ error: 'Method not allowed' });
  }

  const { code } = req.body as { code: string };

  try {
    const paperWallet = await Auth.loginWithPaper(code);

    res.status(200).json(paperWallet);
  } catch (e) {
    console.error(e);

    res.status(500).send({ message: 'Error when requesting the wallet ' });
  }
}
