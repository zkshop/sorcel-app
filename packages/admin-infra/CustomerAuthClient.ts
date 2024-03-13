import type { AuthAdminClient, AuthAdminData } from '@3shop/domains';
import { magicClient } from '@3shop/magic';
import { httpServerless } from '@3shop/http-serverless';
import URL from 'url-parse';

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
      data: {
        didToken: `Bearer ${didToken}`,
      },
    });

    return res.data;
  },

  logout: async () => {
    if (!magicClient) {
      console.warn('Magic client is undefined');
      return false;
    }
    return await magicClient.user.logout();
  },
  loginRedirect: async (email) => {
    if (!magicClient) {
      return false;
    }
    const url = new URL(window.location.href);
    const redirectURI = `${url.origin}/redirect`;

    try {
      await magicClient.auth.loginWithMagicLink({
        email,
        redirectURI,
      });
      return true;
    } catch (e) {
      return false;
    }
  },
  loginWithCredential: async (credential) => {
    if (!magicClient) {
      console.warn('Magic client is undefined');
      return null;
    }
    return magicClient.auth.loginWithCredential(credential);
  },
  verifyUser: async () => {
    if (!magicClient) return initialAuthData;
    const isUserLoggedIn = await magicClient.user.isLoggedIn();

    if (isUserLoggedIn) return initialAuthData;
    return initialAuthData;
  },
});
