import { Nft } from '@3shop/alchemy';
import { BithmompNft } from './Xrp/Bithomp.types';
/**
 * This type represents a platform which is a combination of NFT type and identifiers type.
 * @param ApiResponse - The type of response returned by the API.
 * @param identifiersType - Keys of ApiResponse object which is how the collection is identified.
 */
export type platform<ApiResponse, identifiersType> = {
  identifiers: identifiersType;
  nft: ApiResponse;
};

export interface XRPidentifers {
  issuer: string
  nftokenTaxon: string
}

export interface EVMidentifiers {
  contract: string
}


export type allNames = "XRP" | "EVM";
export type allIdentifiers = XRPidentifers | EVMidentifiers;
export type platformFunctionType<T> = T extends platform<unknown, allIdentifiers> ? T : never;

export namespace platforms {
  export type EvmBased = platform<Nft, EVMidentifiers>;
  export type XRP = platform<BithmompNft, XRPidentifers>;
}