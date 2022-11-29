import '@rainbow-me/rainbowkit/styles.css';
import { ThemeProvider } from 'ui-tbw';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './store';
import { ApolloProvider, useApollo, APOLLO_STATE_PROP_NAME } from 'apollo';
import { WagmiConfig } from 'wagmi';
import { wagmiClient, chains } from './clients/wagmi';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';

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
            <RainbowKitProvider chains={chains}>{children}</RainbowKitProvider>
          </WagmiConfig>
        </ThemeProvider>
      </ApolloProvider>
    </ReduxProvider>
  );
};
