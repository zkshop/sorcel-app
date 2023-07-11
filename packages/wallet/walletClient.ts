import { envVars } from '@3shop/config';
import { getDefaultWallets } from '@rainbow-me/rainbowkit';
import { configureChains, createClient } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { mainnet, polygon } from 'wagmi/chains';

export const { chains, provider } = configureChains(
  [mainnet, polygon],
  [alchemyProvider({ apiKey: envVars.SECRET_ALCHEMY || '' }), publicProvider()],
);

const { connectors } = getDefaultWallets({
  appName: '3shop',
  chains,
});

export const walletClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});
