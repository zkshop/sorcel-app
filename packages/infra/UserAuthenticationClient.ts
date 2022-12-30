import { envVars } from '@3shop/config';
import { TokenService } from '@3shop/domains';
import type { AuthClient } from '@3shop/domains/auth/AuthClient';
import { magicClient } from '@3shop/magic';
import { PaperWalletClient } from './PaperWalletClient';

const initialAuthData = { email: null, issuer: null, phoneNumber: null, publicAddress: null };

const paperWalletService = TokenService(PaperWalletClient());

export function UserAuthenticationClient(): AuthClient {
  return {
    async verifyUser() {
      if (!magicClient) return initialAuthData;
      const isUserLoggedIn = await magicClient.user.isLoggedIn();

      if (isUserLoggedIn) return await magicClient.user.getMetadata();
      return initialAuthData;
    },

    async login(email: string) {
      if (!magicClient) {
        return initialAuthData;
      }

      const didToken = await magicClient.auth.loginWithMagicLink({
        email,
      });

      const res = await fetch(`${envVars.PUBLIC_FUNCTIONS_URL}/api/shop/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + didToken,
        },
      });

      if (res.status === 200) return await magicClient.user.getMetadata();

      return initialAuthData;
    },

    async logout() {
      if (!magicClient) return;
      await magicClient.user.logout();
    },

    async loginWithPaper(code: string) {
      const userToken = await paperWalletService.getToken(code);
      const paperWallet = await paperWalletService.getPaperWalletInfo(userToken);
      return paperWallet;
    },
  };
}
