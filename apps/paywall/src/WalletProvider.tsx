import React from 'react';
import '@rainbow-me/rainbowkit/styles.css';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { WagmiConfig } from 'wagmi';
import { chains, walletConfig } from './walletClient';

type WalletProviderProps = { children: React.ReactElement };

export const WalletProvider = ({ children }: WalletProviderProps) => (
  <WagmiConfig config={walletConfig}>
    <RainbowKitProvider chains={chains}>{children}</RainbowKitProvider>
  </WagmiConfig>
);
