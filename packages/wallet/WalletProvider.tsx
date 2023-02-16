import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import React from 'react';
import { WagmiConfig } from 'wagmi';
import { chains, walletClient } from './walletClient';

type WalletProviderProps = { children: React.ReactElement };

export const WalletProvider = ({ children }: WalletProviderProps) => (
  <WagmiConfig client={walletClient}>
    <RainbowKitProvider chains={chains}>{children}</RainbowKitProvider>
  </WagmiConfig>
);
