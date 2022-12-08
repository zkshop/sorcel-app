import type { Network } from 'alchemy-sdk';
import { Alchemy } from 'alchemy-sdk';
export { Network } from 'alchemy-sdk';
export type { Nft, Alchemy } from 'alchemy-sdk';

export const createAlchemy = (network: Network): Alchemy =>
  new Alchemy({
    apiKey: process.env.ALCHEMY_SECRET_KEY,
    network,
  });
