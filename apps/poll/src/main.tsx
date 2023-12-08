import { ApolloProvider, createApolloShopClient } from '@3shop/apollo';
import { ThemeProvider } from '@3shop/ui';
import { WalletProvider } from '@3shop/wallet';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider as StoreProvider } from 'react-redux';
import { store } from './store/store';
import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';
import { envVars } from '@3shop/config';

const apolloClient = createApolloShopClient();
posthog.init(envVars.POSTHOG_KEY || '');

const Main = () => (
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <StoreProvider store={store}>
        <WalletProvider>
          <ThemeProvider>
            <PostHogProvider client={posthog}>
              <App />
            </PostHogProvider>
          </ThemeProvider>
        </WalletProvider>
      </StoreProvider>
    </ApolloProvider>
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById('3shop-app') as HTMLElement).render(<Main />);
