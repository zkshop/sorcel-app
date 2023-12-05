import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import React from 'react';
import { WagmiConfig } from 'wagmi';
import { chains, walletConfig } from './walletClient';

type WalletProviderProps = { children: React.ReactElement };

export const WalletProvider = ({ children }: WalletProviderProps) => (
  // @ts-ignore
  <WagmiConfig config={walletConfig}>
    <RainbowKitProvider chains={chains}>{children}</RainbowKitProvider>
  </WagmiConfig>
);
