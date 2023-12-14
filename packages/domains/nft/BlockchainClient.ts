import type { NftAttribute } from './Nft';

export type NFT = {
  tokenId: string;
  description: string;
  contract: {
    address: string;
    name: string;
  };
  raw: {
    metadata: Record<string, any>;
  };
};

export type BlockchainClient = {
  getWalletNfts(address: string, contractAddresses?: string[]): Promise<NFT[]>;
  getNftAttribute(smartContractAdress: string): Promise<NftAttribute<any>[]>;
};
