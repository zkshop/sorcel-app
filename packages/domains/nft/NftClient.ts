import type { Nft, NftAttribute } from './Nft';
import {
  platform,
  platforms,
  allIdentifiers,
  platformFunctionType as T,
  platformFunctionType,
} from './NftPlatform';

export type NftClient = {
  getWalletNfts(address: string, contractAddresses?: string[]): Promise<Nft[]>;
  getNftAttribute(smartContractAdress: string): Promise<NftAttribute<any>[]>;
};

export namespace testPlatformClient {
  export type NftClient<T> = {
    getWalletNfts(
      address: string,
      identifiers: platformFunctionType<T>['identifiers'],
    ): Promise<platformFunctionType<T>['nft']>;
  };
}
