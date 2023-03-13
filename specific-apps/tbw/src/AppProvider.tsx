import { ThemeProvider } from '@3shop/ui';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './store';
import { ApolloProvider, useApollo } from '@3shop/apollo';

import { PaperSDKProvider } from '@3shop/paper';
import { envVars } from '@3shop/config';
import { WalletProvider } from '@3shop/wallet';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router';

export const AppProvider = () => {
  const apolloClient = useApollo();

  return (
    <ReduxProvider store={store}>
      <ApolloProvider client={apolloClient}>
        <ThemeProvider>
          <WalletProvider>
            <PaperSDKProvider clientId={envVars.PAPER_CLIENT_ID} chainName="Polygon">
              <RouterProvider router={router} />
            </PaperSDKProvider>
          </WalletProvider>
        </ThemeProvider>
      </ApolloProvider>
    </ReduxProvider>
  );
};
