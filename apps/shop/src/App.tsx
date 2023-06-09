import { Provider as ReduxProvider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { WalletProvider } from '@3shop/wallet';
import { ApolloProvider, createApolloShopClient } from '@3shop/apollo';
import { ThemeProvider } from '@3shop/ui';
import { store } from '@3shop/store';
import { router } from './Router';

const apolloClient = createApolloShopClient();

export const App = () => (
  <ReduxProvider store={store}>
    <ApolloProvider client={apolloClient}>
      <ThemeProvider customTheme>
        <WalletProvider>
          <RouterProvider router={router} />
        </WalletProvider>
      </ThemeProvider>
    </ApolloProvider>
  </ReduxProvider>
);
