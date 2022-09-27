import "@rainbow-me/rainbowkit/styles.css";
import "../min.css";

import { ApolloProvider } from "@apollo/client";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { AppProps } from "next/app";
import { Provider as ReduxProvider } from "react-redux";
import { WagmiConfig } from "wagmi";

import store from "../store/store";
import ThemeDecorator from "../theme/ThemeDecorator";

import { wagmiClient, chains } from "clients/wagmi";
import { Layout } from "components/Layout";
import { useApollo } from "libs/apollo/client";

function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);

  return (
    <WagmiConfig client={wagmiClient}>
      <ApolloProvider client={apolloClient}>
        <RainbowKitProvider chains={chains}>
          <ReduxProvider store={store}>
            <ThemeDecorator>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </ThemeDecorator>
          </ReduxProvider>
        </RainbowKitProvider>
      </ApolloProvider>
    </WagmiConfig>
  );
}

export default App;
