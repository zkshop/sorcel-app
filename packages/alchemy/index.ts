import { Network, Alchemy } from 'alchemy-sdk';
export { Network, NftFilters } from 'alchemy-sdk';
export type { Nft, Alchemy, OwnedNft } from 'alchemy-sdk';

const DEFAULT_NETWORK = 'POLYGON';

if (!process.env.NETWORK)
  console.warn(
    'Network seems to be undefined. Setup on Polygon by default. Please setup the network in environment.',
  );

const networks = {
  ETHEREUM: Network.ETH_MAINNET,
  POLYGON: Network.MATIC_MAINNET,
  default: Network.ETH_MAINNET,
};

const getNetwork = (network?: keyof typeof networks) =>
  network ? networks[network] : networks.default;

export const createAlchemy = (network?: keyof typeof networks): Alchemy =>
  new Alchemy({
    apiKey: process.env.SECRET_ALCHEMY,
    network: getNetwork(
      (network || process.env.NETWORK || DEFAULT_NETWORK) as keyof typeof networks,
    ),
  });
