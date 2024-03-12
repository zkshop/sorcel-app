import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import React from 'react';
import { WagmiConfig } from 'wagmi';
import { chains, walletConfig } from './walletClient';
import { XamanWalletProvider } from './internal/xaman/XamanWalletProvider';

type WalletProviderProps = { children: React.ReactElement };

export const WalletProvider = ({ children }: WalletProviderProps) => (
  // @ts-ignore
  <WagmiConfig config={walletConfig}>
    <RainbowKitProvider chains={chains}>
      <XamanWalletProvider>
        {children}
      </XamanWalletProvider>
    </RainbowKitProvider>
  </WagmiConfig>
);
