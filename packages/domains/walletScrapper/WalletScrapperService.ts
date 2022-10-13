import { WalletScrapperClient } from './WalletScrapperClient';

export function WalletScrapperService(client: WalletScrapperClient) {
  return {
    getWalletNfts: (address: string) => client.getWalletNfts(address),
  };
}
