import { ThemeProvider } from '@3shop/ui';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '@3shop/admin-store';
import { ApolloProvider, createApolloClient } from '@3shop/apollo';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { CookiesProvider } from 'react-cookie';
import { CenterProvider } from '@center-inc/react';
import { envVars } from './envVars';
import { TokenValidityProvider } from './context';
import { PostHogProvider, posthog } from '@3shop/posthog';

type AppProviderProps = {
  children: React.ReactNode;
};

const apolloClient = createApolloClient();

posthog.init(envVars.POSTHOG_KEY || '', {
  api_host: 'https://eu.posthog.com',
  enable_recording_console_log: true,
});

export const AppProvider = ({ children }: AppProviderProps) => (
  <React.StrictMode>
    <PostHogProvider client={posthog}>
      <TokenValidityProvider>
        <CookiesProvider>
          <ApolloProvider client={apolloClient}>
            <ReduxProvider store={store}>
              <CenterProvider
                apiKey={envVars.SECRET_CENTER}
                mode={process.env.NODE_ENV as 'development' | 'production'}
              >
                <BrowserRouter>
                  <ThemeProvider>{children}</ThemeProvider>
                </BrowserRouter>
              </CenterProvider>
            </ReduxProvider>
          </ApolloProvider>
        </CookiesProvider>
      </TokenValidityProvider>
    </PostHogProvider>
  </React.StrictMode>
);
