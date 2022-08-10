import store from "../src/store/store";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiConfig } from "wagmi";
import { wagmiClient, chains } from "../src/clients/wagmi";
import { Provider as ReduxProvider } from "react-redux";
import ThemeDecorator from "../src/theme/ThemeDecorator";
import { AppProps } from "next/app";
import { Layout } from "../src/components/Layout";

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
