import type { AuthAdminClient, AuthAdminData } from '@3shop/domains';
import { magicClient } from '@3shop/magic';
import { httpServerless } from '@3shop/http-serverless';

const initialAuthData: AuthAdminData = { token: '' };

export const CustomerAuthClient = (): AuthAdminClient => ({
  login: async (email) => {
    if (!magicClient) {
      return initialAuthData;
    }

    const didToken = await magicClient.auth.loginWithMagicLink({
      email,
    });

    const res = await httpServerless<AuthAdminData>({
      url: 'api/admin/auth/login',
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
