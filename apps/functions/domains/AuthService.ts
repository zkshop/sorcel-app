import { PaperWallet } from './TokenService';

type AuthData = {
  issuer: string | null;
  publicAddress: string | null;
  email: string | null;
  phoneNumber: string | null;
};

export type AuthClient = {
  login(email: string): Promise<AuthData>;
  logout(): Promise<void>;
  verifyUser(): Promise<AuthData>;
  loginWithPaper(code: string): Promise<PaperWallet>;
};

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
