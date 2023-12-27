import type { Nft, NftAttribute } from './Nft';
import type { NftClient } from './NftClient';
import { testPlatformClient } from './NftClient';
import { platformFunctionType as platform } from './NftPlatform';

type NftServiceType = {
  getWalletNfts(walletAddress: string, contractAddresses?: string[]): Promise<Nft[]>;
  getNftAttribute(address: string): Promise<NftAttribute<any>[]>;
};

export function NftService(client: NftClient): NftServiceType {
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
    ): Promise<platform<T>['nft']>;
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
