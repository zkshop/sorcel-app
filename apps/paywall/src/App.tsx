import { envVars } from '@3shop/config';

import axios from 'axios';
import { useEffect } from 'react';
import { useAccount } from 'wagmi';
import { ConnectWalletButton } from './ConnectWalletButton';

function setLocalStorageItem(key: string, value: any) {
  localStorage.setItem(key, JSON.stringify(value));
}

function removeLocalStorageItem(key: string) {
  localStorage.removeItem(key);
}

async function fetchGrants(address: string) {
  const res = await axios.get(`${envVars.PUBLIC_FUNCTIONS_URL}/api/is-granted`, {
    params: {
      productId: envVars.SORCEL_PRODUCT_ID,
      address,
    },
  });

  return res.data;
}

export function dispatchCustomEvent(event: string) {
  window.dispatchEvent(new CustomEvent(event, { bubbles: true, composed: true }));
}

const App = () => {
  const { isConnected, isDisconnected, address } = useAccount();

  useEffect(() => {
    async function getGrants() {
      if (!address) return;

      const response = await fetchGrants(address);

      setLocalStorageItem('isGranted', response.isGranted);
      dispatchCustomEvent('IS_GRANTED_UPDATED');
    }

    if (isConnected) {
      setLocalStorageItem('isWalletConnected', true);
    }

    if (isDisconnected) {
      removeLocalStorageItem('isWalletConnected');
      removeLocalStorageItem('isGranted');
      dispatchCustomEvent('IS_GRANTED_UPDATED');
    }

    getGrants();
  }, [isConnected, isDisconnected, address]);

  return <ConnectWalletButton />;
};

export default App;
