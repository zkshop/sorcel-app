import { ApolloProvider, useApollo } from '@3shop/apollo';
import { ThemeProvider } from '@3shop/ui';
import { WalletProvider } from '@3shop/wallet';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider as StoreProvider } from 'react-redux';
import { store } from './store/store';

const Main = () => {
  const apolloClient = useApollo();

  return (
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
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<Main />);
