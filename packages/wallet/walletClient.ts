import { envVars } from '@3shop/config';
import { getDefaultWallets } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { mainnet, polygon } from 'wagmi/chains';

export const { chains, publicClient } = configureChains(
  [mainnet, polygon],
  [alchemyProvider({ apiKey: envVars.SECRET_ALCHEMY || '' }), publicProvider()],
);

const { connectors } = getDefaultWallets({
  appName: 'Sorcel',
  projectId: 'Sorcel',
  chains,
});

export const walletConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});
