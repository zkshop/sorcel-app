import axios from 'axios';
import type { AuthAdminClient, AuthAdminData } from 'domains';
import { magicClient } from 'magic';

const initialAuthData: AuthAdminData = { email: '', issuer: '', appId: '', publicAddress: '' };

export const CustomerAuthClient = (): AuthAdminClient => ({
  login: async (email) => {
    if (!magicClient) {
      return initialAuthData;
    }

    const didToken = await magicClient.auth.loginWithMagicLink({
      email,
      redirectURI: window.location.origin,
    });

    axios({
      url: `${process.env.FUNCTIONS_API}/api/admin/auth/login`,
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + didToken,
      },
    });

    return initialAuthData;
  },

  verifyUser: async () => {
    if (!magicClient) return initialAuthData;
    const isUserLoggedIn = await magicClient.user.isLoggedIn();

    if (isUserLoggedIn) return initialAuthData;
    return initialAuthData;
  },
});
