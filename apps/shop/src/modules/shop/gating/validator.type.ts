import { GetProductsQuery, Product } from '@3shop/apollo';
import { SorcelNft } from '@3shop/domains';
import { Maybe } from '@3shop/apollo';

export interface IValidator {
  validate: () => boolean;
}

export type gateType = Maybe<GetProductsQuery['products'][0]['gate'][0]>;

export interface validatorParams {
  // walletAddress: string;
  ownedNfts?: Maybe<SorcelNft[]>;
  gate?: gateType;
  onValidation?: Maybe<(gate: gateType, nft: SorcelNft) => void>
}
