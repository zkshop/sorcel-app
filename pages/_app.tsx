import { ChakraProvider } from "@chakra-ui/react";
import store, { useAppSelector } from "../src/store/store";
import useUpdateThemeOnConnection from "../src/hooks/useUpdateThemeOnConnection";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiConfig } from "wagmi";
import { wagmiClient, chains } from "../src/clients/wagmi";
import { Provider as ReduxProvider } from "react-redux";
import ThemeDecorator from "../src/theme/ThemeDecorator";
import { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  const theme = useAppSelector((state) => state.theme);
  const {} = useUpdateThemeOnConnection();
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <ReduxProvider store={store}>
          <App />
        </ReduxProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
