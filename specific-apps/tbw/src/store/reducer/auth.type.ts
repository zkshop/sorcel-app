export type AuthType = 'paper' | 'WALLET';

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
