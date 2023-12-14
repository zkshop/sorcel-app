import type { NftAttribute } from './Nft';
import type { NFT, NftClient } from './NftClient';

type NftServiceType = {
  getWalletNfts(walletAddress: string, contractAddresses?: string[]): Promise<NFT[]>;
  getNftAttribute(address: string): Promise<NftAttribute<any>[]>;
};

export function NftService(client: NftClient): NftServiceType {
  return {
    getWalletNfts: (walletAddress, contractAddresses) =>
      client.getWalletNfts(walletAddress, contractAddresses),
    getNftAttribute: (smartContractAdress) => client.getNftAttribute(smartContractAdress),
  };
}
