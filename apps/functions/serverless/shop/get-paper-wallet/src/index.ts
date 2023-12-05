import { Request, Response } from 'express';
import { AuthService } from '@3shop/domains';
import { UserAuthenticationClient } from '../../../../infra/UserAuthenticationClient';
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { INTERNAL_SERVER_ERROR, OK } from 'http-status';

const Auth = AuthService(UserAuthenticationClient());

export async function getPaperWallet(req: Request, res: Response) {
  const { code } = req.body as { code: string };

  try {
    const paperWallet = await Auth.loginWithPaper(code);

    return res.status(OK).json(paperWallet);
  } catch (e) {
    console.error(e);

    return res.status(INTERNAL_SERVER_ERROR).send({ message: 'Error when requesting the wallet ' });
  }
}

