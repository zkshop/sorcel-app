import { envVars } from './envVars';
import { useEffect } from 'react';
import { useAccount } from 'wagmi';
import { ConnectWalletButton } from './ConnectWalletButton';
import { httpServerless } from '@3shop/http-serverless';

function setLocalStorageItem(key: string, value: any) {
  localStorage.setItem(key, JSON.stringify(value));
}

function removeLocalStorageItem(key: string) {
  localStorage.removeItem(key);
}

async function fetchGrants(address: string) {
  const res = await httpServerless.get(`api/is-granted`, {
    params: {
      productId: envVars.SORCEL_PRODUCT_ID,
      address,
    },
  });

  return res.data;
}

async function createLogs(address: string, appId: string) {
  await httpServerless.get(`api/create-log`, {
    params: {
      appId,
      address,
    },
  });
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
      createLogs(address as string, '5d9fb7d8-31a5-43c7-a2ca-7bd72b21ef5d');
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
