import { AuthService } from '@3shop/domains';
import { UserAuthenticationClient } from '../../../../infra/UserAuthenticationClient';
import { INTERNAL_SERVER_ERROR, OK } from 'http-status';
import { envMiddleWare, allowCors } from '../../../middlewares';
import type { HttpFunction } from '@google-cloud/functions-framework';

const Auth = AuthService(UserAuthenticationClient());

export const handler: HttpFunction = async (req, res) => {
  const { code } = req.body as { code: string };

  try {
    const paperWallet = await Auth.loginWithPaper(code);

    return res.status(OK).json(paperWallet);
  } catch (e) {
    console.error(e);

    return res.status(INTERNAL_SERVER_ERROR).send({ message: 'Error when requesting the wallet ' });
  }
};

export const getPaperWallet = envMiddleWare(allowCors(handler));
