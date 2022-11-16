import { NftClient } from './NftClient';

export function NftService(client: NftClient) {
  return {
    getWalletNfts: (address: string) => client.getWalletNfts(address),
  };
}
