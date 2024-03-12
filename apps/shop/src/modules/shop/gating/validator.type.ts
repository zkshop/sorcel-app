import type { GetProductsQuery } from '@3shop/apollo';
import type { SorcelNft } from '@3shop/domains';
import type { Maybe } from '@3shop/apollo';

export interface IValidator {
  validate: () => boolean;
}

export type gateType = Maybe<GetProductsQuery['products'][0]['gate'][0]>;
export type validatedElement = {
  nft?: Maybe<SorcelNft>;
  poapId?: Maybe<number>;
};

export interface validatorParams {
  ownedNfts?: Maybe<SorcelNft[]>;
  ownedPoaps?: Maybe<number[]>;
  gate?: gateType;
  onValidation?: Maybe<(gate: gateType, element: validatedElement) => void>;
}
