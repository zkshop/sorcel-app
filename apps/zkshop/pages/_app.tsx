import '@rainbow-me/rainbowkit/styles.css';
import '../min.css';

import { ApolloProvider } from '@apollo/client';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { AppProps } from 'next/app';

import { WagmiConfig } from 'wagmi';

import ThemeDecorator from '../theme/ThemeDecorator';

import { wagmiClient, chains } from 'clients/wagmi';
import { Layout } from 'components/Layout';
import { useApollo } from 'libs/apollo/client';
import { wrapper } from 'store/store';

function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);

  return (
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
  );
}

export default wrapper.withRedux(App);
