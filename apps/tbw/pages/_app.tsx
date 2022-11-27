import '@rainbow-me/rainbowkit/styles.css';
import '../min.css';
import Script from 'next/script';
import { PaperSDKProvider } from 'paper';

import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { AppProps } from 'next/app';

import { WagmiConfig } from 'wagmi';

import { wagmiClient, chains } from '../clients/wagmi';
import { Layout } from 'components/Layout';
import { ApolloProvider, useApollo } from 'apollo';
import { wrapper } from 'store/store';
import { ThemeProvider } from 'ui';
import { Provider as ReduxProvider } from 'react-redux';

type SafeHydrateProps = {
  children: React.ReactNode;
};

function SafeHydrate({ children }: SafeHydrateProps) {
  return <div suppressHydrationWarning>{typeof window === 'undefined' ? null : children}</div>;
}

function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const apolloClient = useApollo(props.pageProps);

  return (
    <SafeHydrate>
      <ReduxProvider store={store}>
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
                    <Component {...props.pageProps} />
                  </Layout>
                </ThemeProvider>
              </PaperSDKProvider>
            </RainbowKitProvider>
          </ApolloProvider>
        </WagmiConfig>
      </ReduxProvider>
    </SafeHydrate>
  );
}

export default App;
