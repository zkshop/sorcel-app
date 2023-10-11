import { ApolloProvider, createApolloShopClient } from '@3shop/apollo';
import { ThemeProvider } from '@3shop/ui';
import { WalletProvider } from '@3shop/wallet';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const apolloClient = createApolloShopClient();

const Main = () => (
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <WalletProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </WalletProvider>
    </ApolloProvider>
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById('3shop-app') as HTMLElement).render(<Main />);
