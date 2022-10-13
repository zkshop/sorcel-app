import { Nft } from './Nft';

export type WalletScrapperClient = {
  getWalletNfts(address: string): Promise<Nft[]>;
};
