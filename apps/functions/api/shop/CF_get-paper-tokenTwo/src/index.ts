import { TokenService } from '@3shop/domains';
import { PaperWalletClient } from '@infra/PaperWalletClient';
import { INTERNAL_SERVER_ERROR, OK } from 'http-status';
import { HttpFunction } from '@google-cloud/functions-framework';
// import {SorcelAppCreator} from '@infra/SorcelAppCreator';
import {SorcelAppCreator} from '../../../../infra/SorcelAppCreator';
const creator = SorcelAppCreator();
// const Token = TokenService(PaperWalletClient());

export const getPaperToken: HttpFunction = async (req: any, res: any) => {
  creator.createApp("test");
  res.send('getPaperToken');
  // const { code } = req.body as { code: string };

  // try {
  //   const userToken = await Token.getToken(code);

  //   res.status(OK).json({ userToken });
  // } catch (e) {
  //   console.error({ e });

  //   res.status(INTERNAL_SERVER_ERROR).json(e);
  // }
};