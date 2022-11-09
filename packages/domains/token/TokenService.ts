import { PaperWallet } from './PaperWallet';
import { TokenClient } from './TokenClient';

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
