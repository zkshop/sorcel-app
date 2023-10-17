import { ConnectWalletButton, useAccount } from '@3shop/wallet';
import { useEffect } from 'react';

function setLocalStorageItem(key: string, value: any) {
  localStorage.setItem(key, JSON.stringify(value));
}

function removeLocalStorageItem(key: string) {
  localStorage.removeItem(key);
}

const App = ({}) => {
  const { isConnected, isDisconnected } = useAccount();

  useEffect(() => {
    if (isConnected) {
      setLocalStorageItem('isWalletConnected', true);
    }

    if (isDisconnected) {
      removeLocalStorageItem('isWalletConnected');
    }
  }, [isConnected]);

  return <ConnectWalletButton />;
};

export default App;
