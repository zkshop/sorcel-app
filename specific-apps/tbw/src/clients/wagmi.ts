import { getDefaultWallets } from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

export const { chains, provider }: { chains: any; provider: any } = configureChains(
  [chain.polygon, chain.polygonMumbai, chain.mainnet, chain.optimism, chain.arbitrum],
  [alchemyProvider({ apiKey: process.env.SECRET_ALCHEMY || 'demo' }), publicProvider()],
);

const { connectors } = getDefaultWallets({
  appName: '3shop',
  chains,
});

export const wagmiClient: any = createClient({
  autoConnect: true,
  connectors,
  provider,
});
