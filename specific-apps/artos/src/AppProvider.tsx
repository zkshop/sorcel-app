import '@rainbow-me/rainbowkit/styles.css';
import { ThemeProvider } from '@3shop/ui';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './store';
import { ApolloProvider, useApollo, APOLLO_STATE_PROP_NAME } from '@3shop/apollo';
import { WagmiConfig } from 'wagmi';
import { wagmiClient, chains } from './clients/wagmi';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { PaperSDKProvider } from '@3shop/paper';

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const apolloClient = useApollo({
    [APOLLO_STATE_PROP_NAME]: {},
  });

  return (
    <ReduxProvider store={store}>
      <ApolloProvider client={apolloClient}>
        <ThemeProvider>
          <WagmiConfig client={wagmiClient}>
            <RainbowKitProvider chains={chains}>
              <PaperSDKProvider clientId={process.env.PAPER_CLIENT_ID} chainName="Polygon">
                {children}
              </PaperSDKProvider>
            </RainbowKitProvider>
          </WagmiConfig>
        </ThemeProvider>
      </ApolloProvider>
    </ReduxProvider>
  );
};
