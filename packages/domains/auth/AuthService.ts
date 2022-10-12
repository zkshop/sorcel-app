import { AuthClient } from './AuthClient';
import { AuthData } from './AuthData';

type AuthServiceType = {
  loginWithEmail: (email: string) => Promise<AuthData>;
  refresh: () => Promise<AuthData>;
  logout: () => Promise<void>;
};

export function AuthService(client: AuthClient): AuthServiceType {
  return {
    loginWithEmail: async (email: string) => await client.login(email),
    refresh: async () => await client.verifyUser(),
    logout: async () => {
      await client.logout();
    },
  };
}
