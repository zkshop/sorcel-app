export type AuthType = 'PAPER' | 'WALLET';

export type PaperWallet = {
  walletAddress: string;
  email: string;
};

export type AuthData = {
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

export type AuthServiceType = {
  loginWithEmail: (email: string) => Promise<AuthData>;
  refresh: () => Promise<AuthData>;
  logout: () => Promise<void>;
  loginWithPaper(code: string): Promise<PaperWallet>;
};
