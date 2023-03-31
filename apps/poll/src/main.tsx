import { ApolloProvider, createApolloClient } from '@3shop/apollo';
import { ThemeProvider } from '@3shop/ui';
import { WalletProvider } from '@3shop/wallet';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const apolloClient = createApolloClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <ApolloProvider client={apolloClient}>
        <WalletProvider>
          <App />
        </WalletProvider>
      </ApolloProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
