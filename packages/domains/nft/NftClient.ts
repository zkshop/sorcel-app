import type { Nft, NftAttribute } from './Nft';
import { platforms, allIdentifiers, platformFunctionType as platform } from './NftPlatform';
import { SorcelNft } from './SorcelNft';

export type NftClient = {
  getWalletNfts(address: string, contractAddresses?: string[]): Promise<Nft[]>;
  getNftAttribute(smartContractAdress: string): Promise<NftAttribute<any>[]>;
};

export namespace testPlatformClient {
  export type NftClient<T> = {
    getWalletNfts(address: string, identifiers: platform<T>['identifiers']): Promise<SorcelNft[]>;
  };
}
