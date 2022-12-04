export type TokenClient = {
  getToken(code: string): Promise<string>;
  getWalletAddress(userToken: string): Promise<PaperWallet>;
};

export type PaperWallet = {
  walletAddress: string;
  email: string;
};

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
