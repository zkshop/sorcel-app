import { Alchemy, Network } from 'alchemy-sdk';
export { Network } from 'alchemy-sdk';
export type { Nft } from 'alchemy-sdk';

export const createAlchemy = (network: Network): Alchemy =>
  new Alchemy({
    apiKey: 'demo',
    network,
  });
