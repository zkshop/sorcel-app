import { Network, Alchemy } from 'alchemy-sdk';
import { envVars } from '@3shop/config';
export { Network } from 'alchemy-sdk';
const DEFAULT_NETWORK = 'POLYGON';
if (!envVars.NETWORK)
    console.warn('Network seems to be undefined. Setup on Polygon by default. Please setup the network in environment.');
const networks = {
    ETHEREUM: Network.ETH_MAINNET,
    POLYGON: Network.MATIC_MAINNET,
    default: Network.ETH_MAINNET,
};
const getNetwork = (network) => network ? networks[network] : networks.default;
export const createAlchemy = () => new Alchemy({
    apiKey: envVars.SECRET_ALCHEMY,
    network: getNetwork((envVars.NETWORK || DEFAULT_NETWORK)),
});
