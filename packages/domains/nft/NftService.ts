import type { Nft, NftAttribute } from './Nft';
import type { NftClient } from './NftClient';

type NftServiceType = {
  getWalletNfts(walletAddress: string): Promise<Nft[]>;
  getNftAttribute(address: string): Promise<NftAttribute<any>[]>;
};

export function NftService(client: NftClient): NftServiceType {
  return {
    getWalletNfts: (walletAddress: string) => client.getWalletNfts(walletAddress),
    getNftAttribute: (smartContractAdress: string) => client.getNftAttribute(smartContractAdress),
  };
}
