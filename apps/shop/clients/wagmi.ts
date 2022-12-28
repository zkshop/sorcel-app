import { envVars } from '@3shop/config';
import { getDefaultWallets } from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

export const { chains, provider } = configureChains(
  [chain.polygon, chain.polygonMumbai, chain.mainnet, chain.optimism, chain.arbitrum],
  [alchemyProvider({ apiKey: envVars.SECRET_ALCHEMY }), publicProvider()],
);

const { connectors } = getDefaultWallets({
  appName: '3shop',
  chains,
});

export const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});
