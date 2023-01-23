import '@rainbow-me/rainbowkit/styles.css';

import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { Provider as ReduxProvider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { WagmiConfig } from 'wagmi';

import { wagmiClient, chains } from '@/clients/wagmi';
import { ApolloProvider, useApollo } from '@3shop/apollo';
import { ThemeProvider } from '@3shop/ui';
import { store } from '@3shop/store';
import { router } from './Router';

export const App = () => {
  const apolloClient = useApollo();
  return (
    <ReduxProvider store={store}>
      <ApolloProvider client={apolloClient}>
        <ThemeProvider mode="ALTERNATIVE">
          <WagmiConfig client={wagmiClient}>
            <RainbowKitProvider chains={chains}>
              <RouterProvider router={router} />
            </RainbowKitProvider>
          </WagmiConfig>
        </ThemeProvider>
      </ApolloProvider>
    </ReduxProvider>
  );
};
