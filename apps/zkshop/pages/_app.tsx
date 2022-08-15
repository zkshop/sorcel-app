import "@rainbow-me/rainbowkit/styles.css";
import "../min.css";

import store from "../store/store";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiConfig } from "wagmi";
import { wagmiClient, chains } from "../clients/wagmi";
import { Provider as ReduxProvider } from "react-redux";
import ThemeDecorator from "../theme/ThemeDecorator";
import { AppProps } from "next/app";
import { Layout } from "../components/Layout";
import { ApolloProvider } from "@apollo/client";
import client from "../libs/apollo/client";

function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <ApolloProvider client={client}>
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
