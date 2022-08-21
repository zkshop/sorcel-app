import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { ApolloProvider } from "@apollo/client";
import { Provider as ReduxProvider } from "react-redux";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiConfig } from "wagmi";
import { wagmiClient, chains } from "../clients/wagmi";
import client from "../libs/apollo/client";
import store from "../store/store";
import ThemeDecorator from "../theme/ThemeDecorator";

type AllTheProvidersProps = {
  children: React.ReactNode;
};

const AllTheProviders = ({ children }: AllTheProvidersProps) => {
  return (
    <WagmiConfig client={wagmiClient}>
      <ApolloProvider client={client}>
        <RainbowKitProvider chains={chains}>
          <ReduxProvider store={store}>
            <ThemeDecorator>{children}</ThemeDecorator>
          </ReduxProvider>
        </RainbowKitProvider>
      </ApolloProvider>
    </WagmiConfig>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";

export { customRender as render };
