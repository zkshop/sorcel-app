import { AuthTokenValidationService } from 'domains';
import { UserTokenValidationClient } from 'infra';
import type { NextApiRequest, NextApiResponse } from 'next';

const Token = AuthTokenValidationService(UserTokenValidationClient());

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  try {
    const token = req.headers.authorization?.substring(7) || '';
    Token.validate(token);
    res.status(200).json({ authenticated: true });
  } catch (error) {
    res.status(500).json({ error });
  }
}
