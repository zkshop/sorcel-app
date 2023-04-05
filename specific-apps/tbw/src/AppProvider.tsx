import { ThemeProvider } from '@3shop/ui-tbw';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './store';
import { ApolloProvider, createApolloShopClient } from '@3shop/apollo';

import { PaperSDKProvider } from '@3shop/paper';
import { envVars } from '@3shop/config';
import { WalletProvider } from '@3shop/wallet';

type AppProviderProps = {
  children: React.ReactNode;
};

const apolloClient = createApolloShopClient();

export const AppProvider = ({ children }: AppProviderProps) => (
  <ReduxProvider store={store}>
    <ApolloProvider client={apolloClient}>
      <ThemeProvider>
        <WalletProvider>
          <PaperSDKProvider clientId={envVars.PAPER_CLIENT_ID} chainName="Polygon">
            {children}
          </PaperSDKProvider>
        </WalletProvider>
      </ThemeProvider>
    </ApolloProvider>
  </ReduxProvider>
);
