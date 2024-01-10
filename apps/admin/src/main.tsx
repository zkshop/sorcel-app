import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { AppProvider } from './AppProvider';
import { Sentry } from '@3shop/sentry';

Sentry.init({
  dsn: 'https://a2dbf5ec9882a628eaae44ee4690fa01@o4506547892387840.ingest.sentry.io/4506547893960704',
  integrations: [],
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
);
