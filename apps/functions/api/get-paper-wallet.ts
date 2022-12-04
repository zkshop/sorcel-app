import { AuthService } from '../domains/AuthService';
import { UserAuthenticationClient } from '../infra/UserAuthenticationClient';
import { VercelRequest, VercelResponse } from '@vercel/node';

const Auth = AuthService(UserAuthenticationClient());

export default async function handler(req: VercelRequest, res: VercelResponse) {
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
