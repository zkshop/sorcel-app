// TODO: uncomment this before dev
import { Buffer as BufferPolyfill } from 'buffer';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare let Buffer: typeof BufferPolyfill;
globalThis.Buffer = BufferPolyfill;
(window.global as any) = globalThis;
// END TODO

import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

ReactDOM.createRoot(document.getElementById('3shop-app') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
