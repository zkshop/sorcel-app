import type { Nft, NftAttribute } from './Nft';

export type NftClient = {
  getWalletNfts(address: string, contractAddresses?: string[]): Promise<Nft[]>;
  getNftAttribute(smartContractAdress: string): Promise<NftAttribute<any>[]>;
};
