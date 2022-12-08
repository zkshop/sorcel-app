import { ThemeProvider } from 'ui';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from 'admin-store';
import { ApolloProvider, useApollo, APOLLO_STATE_PROP_NAME } from 'apollo';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const apolloClient = useApollo({
    [APOLLO_STATE_PROP_NAME]: {},
  });

  return (
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
};
