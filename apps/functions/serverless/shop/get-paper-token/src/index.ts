import { Request, Response } from 'express';
import { TokenService } from '../../../../../../packages/domains';
import { PaperWalletClient } from '../../../../infra/PaperWalletClient';
import { INTERNAL_SERVER_ERROR, OK } from 'http-status';

const Token = TokenService(PaperWalletClient());

export async function getPaperToken(req: Request, res: Response) {
    const { code } = req.body as { code: string };

  try {
    const userToken = await Token.getToken(code);

    return res.status(OK).json({ userToken });
  } catch (e) {
    console.error({ e });

    return res.status(INTERNAL_SERVER_ERROR).json(e);
  }
}

