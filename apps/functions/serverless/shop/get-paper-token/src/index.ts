import { TokenService } from '../../../../../../packages/domains';
import { PaperWalletClient } from '../../../../infra/PaperWalletClient';
import { INTERNAL_SERVER_ERROR, OK } from 'http-status';
import { envMiddleWare, allowCors } from '../../../middlewares';
import type { HttpFunction } from '@google-cloud/functions-framework';

const Token = TokenService(PaperWalletClient());

export const handler: HttpFunction = async (req, res) => {
  const { code } = req.body as { code: string };

  try {
    const userToken = await Token.getToken(code);

    return res.status(OK).json({ userToken });
  } catch (e) {
    console.error({ e });

    return res.status(INTERNAL_SERVER_ERROR).json(e);
  }
};

export const getPaperToken = envMiddleWare(allowCors(handler));
