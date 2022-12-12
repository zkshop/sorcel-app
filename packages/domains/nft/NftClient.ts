import type { Nft, NftAttribute } from './Nft';

export type NftClient = {
  getWalletNfts(address: string): Promise<Nft[]>;
  getNftAttribute(smartContractAdress: string): Promise<NftAttribute<any>[]>;
};
