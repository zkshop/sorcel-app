import '@rainbow-me/rainbowkit/styles.css';
import '../min.css';
import Script from 'next/script';
import { PaperSDKProvider } from 'paper';

import { ApolloProvider } from '@apollo/client';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { AppProps } from 'next/app';

import { WagmiConfig } from 'wagmi';

import { wagmiClient, chains } from '../clients/wagmi';
import { Layout } from 'components/Layout';
import { useApollo } from 'apollo';
import { wrapper } from 'store/store';
import { ThemeProvider } from 'ui';

type SafeHydrateProps = {
  children: React.ReactNode;
};

function SafeHydrate({ children }: SafeHydrateProps) {
  return <div suppressHydrationWarning>{typeof window === 'undefined' ? null : children}</div>;
}

function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);

  return (
    <SafeHydrate>
      <WagmiConfig client={wagmiClient}>
        <ApolloProvider client={apolloClient}>
          <RainbowKitProvider chains={chains}>
            <PaperSDKProvider clientId={process.env.PAPER_CLIENT_ID} chainName="Polygon">
              <ThemeProvider>
                <Layout>
                  <Script
                    strategy="lazyOnload"
                    src="https://api.memberstack.io/static/memberstack.js?webflow"
                    data-memberstack-id="59c14da429bc5b71d3fde892fd9fdc7d"
                  />
                  <Component {...pageProps} />
                </Layout>
              </ThemeProvider>
            </PaperSDKProvider>
          </RainbowKitProvider>
        </ApolloProvider>
      </WagmiConfig>
    </SafeHydrate>
  );
}

export default wrapper.withRedux(App);
