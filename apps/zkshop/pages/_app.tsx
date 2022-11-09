import '@rainbow-me/rainbowkit/styles.css';
import '../min.css';

import { ApolloProvider } from '@apollo/client';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { AppProps } from 'next/app';

import { WagmiConfig } from 'wagmi';

import { wagmiClient, chains } from '../clients/wagmi';
import { Layout } from 'components/Layout';
import { useApollo } from 'apollo';
import { wrapper } from 'store/store';
import { ThemeDecorator } from 'components/ThemeDecorator';
import { PaperSDKProvider } from 'paper';

function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);

  return (
    <WagmiConfig client={wagmiClient}>
      <ApolloProvider client={apolloClient}>
        <RainbowKitProvider chains={chains}>
          <PaperSDKProvider clientId={process.env.PAPER_CLIENT_ID} chainName="Polygon">
            <ThemeDecorator>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </ThemeDecorator>
          </PaperSDKProvider>
        </RainbowKitProvider>
      </ApolloProvider>
    </WagmiConfig>
  );
}

export default wrapper.withRedux(App);
