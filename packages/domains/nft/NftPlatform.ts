import { BithmompNft } from './Xrp/Bithomp.types';

export type platform<identifiersType, apiResponseType = {}> = {
  identifiers: identifiersType;
};

export interface XRPidentifers {
  issuer: string;
  nftokenTaxon: string;
}

export interface EVMidentifiers {
  contractAdress: string;
}

export type allNames = 'XRP' | 'EVM';
export type allIdentifiers = XRPidentifers | EVMidentifiers;
export type platformFunctionType<T> = T extends platform<allIdentifiers> ? T : never;

export namespace platforms {
  export type EVM = platform<EVMidentifiers>;
  export type XRP = platform<XRPidentifers, BithmompNft[]>;
}
