import { getDefaultWallets } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { mainnet, polygon } from 'wagmi/chains';

export const { chains, publicClient } = configureChains(
  [mainnet, polygon],
  [alchemyProvider({ apiKey: process.env.SECRET_ALCHEMY || '' }), publicProvider()],
);

const { connectors } = getDefaultWallets({
  appName: 'Sorcel',
  projectId: 'c7eab94604b36836a194849de4342b19',
  chains,
});

export const walletConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});
