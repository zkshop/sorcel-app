import { NextApiRequest, NextApiResponse } from 'next';
import { magicSDK } from 'auth';

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  try {
    const didToken = req.headers.authorization?.substring(7) || '';
    magicSDK.token.validate(didToken);
    res.status(200).json({ authenticated: true });
  } catch (error) {
    res.status(500).json({ error });
  }
}
