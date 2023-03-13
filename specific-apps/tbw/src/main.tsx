// TODO: uncomment this before building
// import { Buffer as BufferPolyfill } from 'buffer';
// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// declare let Buffer: typeof BufferPolyfill;
// globalThis.Buffer = BufferPolyfill;

// (window.global as any) = globalThis;
import React from 'react';
import ReactDOM from 'react-dom/client';
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
    <AppProvider />
  </React.StrictMode>,
);
