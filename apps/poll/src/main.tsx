import { ApolloProvider, createApolloShopClient } from '@3shop/apollo';
import { ThemeProvider } from '@3shop/ui';
import { WalletProvider } from '@3shop/wallet';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider as StoreProvider } from 'react-redux';
import { store } from './store/store';

const apolloClient = createApolloShopClient();

const Main = () => (
  <React.StrictMode>
    <ThemeProvider>
      <ApolloProvider client={apolloClient}>
        <StoreProvider store={store}>
          <WalletProvider>
            <App />
          </WalletProvider>
        </StoreProvider>
      </ApolloProvider>
    </ThemeProvider>
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById('3shop-app') as HTMLElement).render(<Main />);
