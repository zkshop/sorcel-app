import { PaperWallet } from './PaperWallet';

export type TokenClient = {
  getToken(code: string): Promise<string>;
  getWalletAddress(userToken: string): Promise<PaperWallet>;
};
