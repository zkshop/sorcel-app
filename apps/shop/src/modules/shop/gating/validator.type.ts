import { GetProductsQuery, Product } from '@3shop/apollo';
import { SorcelNft } from '@3shop/domains';
import { Maybe } from '@3shop/apollo';

export interface IValidator {
  validate: () => boolean;
}

export type gateType = Maybe<GetProductsQuery['products'][0]['gate'][0]>;
export type validatedElement = {
  nft?: Maybe<SorcelNft>;
  poapId?: Maybe<number>
}

export interface validatorParams {
  // walletAddress: string;
  ownedNfts?: Maybe<SorcelNft[]>;
  ownedPoaps?: Maybe<number[]>;
  gate?: gateType;
  onValidation?: Maybe<(gate: gateType, element: validatedElement) => void>
}
