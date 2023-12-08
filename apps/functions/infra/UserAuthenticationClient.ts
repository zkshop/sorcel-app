import type { AuthClient } from '@3shop/domains';
import { TokenService } from '@3shop/domains';
import { PaperWalletClient } from './PaperWalletClient';

const initialAuthData = { email: null, issuer: null, phoneNumber: null, publicAddress: null };

const paper = TokenService(PaperWalletClient());

export function UserAuthenticationClient(): AuthClient {
  return {
    verifyUser: async () => initialAuthData,

    login: async () => initialAuthData,

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    logout: async () => {},

    loginWithPaper: async (code: string) => {
      const userToken = await paper.getToken(code);

      const paperWallet = await paper.getPaperWalletInfo(userToken);

      return paperWallet;
    },
  };
}
