import '@rainbow-me/rainbowkit/styles.css';
import '../min.css';

import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import type { AppProps } from 'next/app';
import { Provider as ReduxProvider } from 'react-redux';

import { WagmiConfig } from 'wagmi';

import { wagmiClient, chains } from '../clients/wagmi';
import { Layout } from 'components/Layout';
import { ApolloProvider, useApollo } from 'apollo';
import { wrapper } from 'store';
import { ThemeDecorator } from 'components/ThemeDecorator';

function App({ Component, pageProps, ...rest }: AppProps) {
  const apolloClient = useApollo(pageProps);
  const { store } = wrapper.useWrappedStore(rest);

  return (
    <ReduxProvider store={store}>
      <WagmiConfig client={wagmiClient}>
        <ApolloProvider client={apolloClient}>
          <RainbowKitProvider chains={chains}>
            <ThemeDecorator>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </ThemeDecorator>
          </RainbowKitProvider>
        </ApolloProvider>
      </WagmiConfig>
    </ReduxProvider>
  );
}

export default App;
