import axios from 'axios';
import type { AuthAdminClient, AuthAdminData } from '@3shop/domains';
import { magicClient } from '@3shop/magic';

const initialAuthData: AuthAdminData = { token: '' };

export const CustomerAuthClient = (): AuthAdminClient => ({
  login: async (email) => {
    if (!magicClient) {
      return initialAuthData;
    }

    const didToken = await magicClient.auth.loginWithMagicLink({
      email,
    });

    const res = await axios<AuthAdminData>({
      url: `${process.env.PUBLIC_FUNCTIONS_URL}/api/admin/auth/login`,
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + didToken,
      },
    });

    return res.data;
  },

  verifyUser: async () => {
    if (!magicClient) return initialAuthData;
    const isUserLoggedIn = await magicClient.user.isLoggedIn();

    if (isUserLoggedIn) return initialAuthData;
    return initialAuthData;
  },
});
