(window.global as any) = globalThis;
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { AppProvider } from './AppProvider';
import './min.css';

ReactDOM.createRoot(document.getElementById('3shop-app') as HTMLElement).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
);
