import { ThemeProvider } from '@3shop/ui-tbw';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './store';
import { ApolloProvider, useApollo } from '@3shop/apollo';

import { PaperSDKProvider } from '@3shop/paper';
import { envVars } from '@3shop/config';
import { WalletProvider } from '@3shop/wallet';

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const apolloClient = useApollo();

  return (
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
};
