import { PaperWalletClient, TokenClient } from '../paper';

type TokenServiceType = {
  getToken(code: string): Promise<string>;
  getPaperWalletInfo(userToken: string): Promise<PaperWallet>;
};

export function TokenService(client: TokenClient): TokenServiceType {
  return {
    getToken: async (code) => await client.getToken(code),
    getPaperWalletInfo: async (userToken) => await client.getWalletAddress(userToken),
  };
}

export type AuthData = {
  issuer: string | null;
  publicAddress: string | null;
  email: string | null;
  phoneNumber: string | null;
};

export type PaperWallet = {
  walletAddress: string;
  email: string;
};

export type AuthClient = {
  login(email: string): Promise<AuthData>;
  logout(): Promise<void>;
  verifyUser(): Promise<AuthData>;
  loginWithPaper(code: string): Promise<PaperWallet>;
};

const initialAuthData = { email: null, issuer: null, phoneNumber: null, publicAddress: null };

const paper = TokenService(PaperWalletClient());

export const UserAuthenticationClient = (): AuthClient => ({
  verifyUser: async () => initialAuthData,

  login: async () => initialAuthData,

  logout: async () => {},

  loginWithPaper: async (code: string) => {
    const userToken = await paper.getToken(code);

    const paperWallet = await paper.getPaperWalletInfo(userToken);

    return paperWallet;
  },
});
