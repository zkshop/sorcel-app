import { ThemeProvider } from 'ui';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from 'admin-store';
import { ApolloProvider, createApolloClient } from 'apollo';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

type AppProviderProps = {
  children: React.ReactNode;
};

const apolloClient = createApolloClient();

export const AppProvider = ({ children }: AppProviderProps) => (
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <ReduxProvider store={store}>
        <BrowserRouter>
          <ThemeProvider>{children}</ThemeProvider>
        </BrowserRouter>
      </ReduxProvider>
    </ApolloProvider>
  </React.StrictMode>
);
