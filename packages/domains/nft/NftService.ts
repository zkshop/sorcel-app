import type { NftAttribute } from './Nft';
import { Nft } from '@3shop/alchemy';
import type { NftClient } from './NftClient';
import { testPlatformClient } from './NftClient';
import { platformFunctionType as platform } from './NftPlatform';
import type { NFT, BlockchainClient } from './BlockchainClient';

type NftServiceType = {
  getWalletNfts(walletAddress: string, contractAddresses?: string[]): Promise<NFT[]>;
  getNftAttribute(address: string): Promise<NftAttribute<any>[]>;
};

export function NftService(client: BlockchainClient): NftServiceType {
  return {
    getWalletNfts: (walletAddress, contractAddresses) =>
      client.getWalletNfts(walletAddress, contractAddresses),
    getNftAttribute: (smartContractAdress) => client.getNftAttribute(smartContractAdress),
  };
}

export namespace testPlatformService {
  export type NftServiceType<T> = {
    getWalletNfts(
      walletAddress: string,
      identifiers: platform<T>['identifiers'],
    ): Promise<Nft[]>;
    // getNftAttribute(address: string): Promise<NftAttribute<any>[]>;
  };

  export function NftService<T>(client: testPlatformClient.NftClient<T>): NftServiceType<T> {
    return {
      getWalletNfts: (walletAddress, identifiers) =>
        client.getWalletNfts(walletAddress, identifiers),
      // getNftAttribute: (smartContractAdress) => client.getNftAttribute(smartContractAdress),
    };
  }
}
