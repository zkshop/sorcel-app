import { BithmompNft } from './Xrp/Bithomp.types';
/**
 * This type represents a platform which is a combination of NFT type and identifiers type.
 * @param ApiResponse - The type of response returned by the API.
 * @param identifiersType - Keys of ApiResponse object which is how the collection is identified.
 */
export type platform<identifiersType> = {
  identifiers: identifiersType;
};

export interface XRPidentifers {
  issuer: string;
  nftokenTaxon: string;
}

export interface EVMidentifiers {
  contract: string;
}

export type allNames = 'XRP' | 'EVM';
export type allIdentifiers = XRPidentifers | EVMidentifiers;
export type platformFunctionType<T> = T extends platform<allIdentifiers> ? T : never;

export namespace platforms {
  export type EVM = platform<EVMidentifiers>;
  export type XRP = platform<XRPidentifers>;
}
