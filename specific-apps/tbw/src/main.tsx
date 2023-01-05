import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { AppProvider } from './AppProvider';
import posthog from 'posthog-js';

posthog.init('phc_NL98HSOKoKpH1YhIuYCEmFgXAl9yVUaGryiwutmYaeI', {
  api_host: 'https://eu.posthog.com',
  session_recording: {
    inlineStylesheet: false,
  },
});

ReactDOM.createRoot(document.getElementById('3shop-app') as HTMLElement).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
);
