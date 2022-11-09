import { PaperWallet } from '..';
import { AuthClient } from './AuthClient';
import { AuthData } from './AuthData';

type AuthServiceType = {
  loginWithEmail: (email: string) => Promise<AuthData>;
  refresh: () => Promise<AuthData>;
  logout: () => Promise<void>;
  loginWithPaper(code: string): Promise<PaperWallet>;
};

export function AuthService(client: AuthClient): AuthServiceType {
  return {
    loginWithEmail: async (email) => await client.login(email),
    refresh: async () => await client.verifyUser(),
    logout: async () => {
      await client.logout();
    },
    loginWithPaper: async (code) => await client.loginWithPaper(code),
  };
}
