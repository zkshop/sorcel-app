import type { Network } from 'alchemy-sdk';
import { Alchemy } from 'alchemy-sdk';
import { envVars } from '@3shop/config';
export { Network } from 'alchemy-sdk';
export type { Nft, Alchemy, OwnedNft } from 'alchemy-sdk';

export const createAlchemy = (network: Network): Alchemy =>
  new Alchemy({
    apiKey: envVars.SECRET_ALCHEMY,
    network,
  });
