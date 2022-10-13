import { AuthClient } from 'domains/auth/AuthClient';
import { magicClient } from 'magic';

const initialAuthData = { email: null, issuer: null, phoneNumber: null, publicAddress: null };

export function UserAuthenticationClient(): AuthClient {
  return {
    verifyUser: async () => {
      if (!magicClient) return initialAuthData;
      const isUserLoggedIn = await magicClient.user.isLoggedIn();

      if (isUserLoggedIn) return await magicClient.user.getMetadata();
      return initialAuthData;
    },

    login: async (email) => {
      if (!magicClient) {
        return initialAuthData;
      }

      const didToken = await magicClient.auth.loginWithMagicLink({
        email,
        redirectURI: window.location.origin,
      });

      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + didToken,
        },
      });

      if (res.status === 200) return await magicClient.user.getMetadata();

      return initialAuthData;
    },

    logout: async () => {
      if (!magicClient) return;
      await magicClient.user.logout();
    },
  };
}
