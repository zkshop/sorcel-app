import { WalletProvider } from './WalletProvider';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const Main = () => (
  <React.StrictMode>
    <WalletProvider>
      <App />
    </WalletProvider>
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById('3shop-app') as HTMLElement).render(<Main />);
