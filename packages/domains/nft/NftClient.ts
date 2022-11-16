import { Nft } from './Nft';

export type NftClient = {
  getWalletNfts(address: string): Promise<Nft[]>;
};
