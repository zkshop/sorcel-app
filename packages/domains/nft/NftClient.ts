import type { NftAttribute } from './Nft';
import type { Nft } from '@3shop/alchemy';
import { platformFunctionType as platform } from './NftPlatform';

export type NftClient = {
  getWalletNfts(address: string, contractAddresses?: string[]): Promise<Nft[]>;
  getNftAttribute(smartContractAdress: string): Promise<NftAttribute<any>[]>;
};

export namespace testPlatformClient {
  export type NftClient<T, K> = {
    getWalletNfts(address: string, identifiers: platform<T>['identifiers']): Promise<K>;
  };
}
