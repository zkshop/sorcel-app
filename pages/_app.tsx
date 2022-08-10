import "@rainbow-me/rainbowkit/styles.css";

import store from "../store/store";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiConfig } from "wagmi";
import { wagmiClient, chains } from "../clients/wagmi";
import { Provider as ReduxProvider } from "react-redux";
import ThemeDecorator from "../theme/ThemeDecorator";
import { AppProps } from "next/app";
import { Layout } from "../components/Layout";

function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <ReduxProvider store={store}>
          <ThemeDecorator>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeDecorator>
        </ReduxProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
