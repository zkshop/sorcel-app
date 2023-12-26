import { Nft } from '@3shop/alchemy';
import { Nft as BithmompNft } from './Xrp/Bithomp.types';

export interface collectionIdentifiers {
  contract: true;
  nftokenTaxon: true;
  issuer: true;
}

/**
 * This type represents a platform which is a combination of NFT type and identifiers type.
 * @param ApiResponse - The type of response returned by the API.
 * @param identifiersType - Keys of ApiResponse object which is how the collection is identified.
 */
export type platform<ApiResponse, identifiersType> = {
  identifiers: identifiersType;
  nft: ApiResponse;
};

export interface EvmBased {
  identifiers: Pick<collectionIdentifiers, 'contract'>;
}

export namespace platforms {
  export type Etherum = platform<Nft, EvmBased>;

  export type Polygon = platform<Nft, EvmBased>;

  export type Xrp = platform<BithmompNft, Pick<collectionIdentifiers, 'issuer' | 'nftokenTaxon'>>;
}