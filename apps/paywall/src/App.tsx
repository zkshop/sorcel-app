import { envVars } from '@3shop/config';
import { ConnectWalletButton, useAccount } from '@3shop/wallet';
import axios from 'axios';
import { useEffect } from 'react';

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

const App = () => {
  const { isConnected, isDisconnected, address } = useAccount();
  console.log({ envVars });

  useEffect(() => {
    async function getGrants() {
      if (!address) return;

      const response = await fetchGrants(address);

      setLocalStorageItem('isGranted', response.isGranted);
    }

    if (isConnected) {
      setLocalStorageItem('isWalletConnected', true);
    }

    if (isDisconnected) {
      removeLocalStorageItem('isWalletConnected');
      removeLocalStorageItem('isGranted');
    }

    getGrants();
  }, [isConnected]);

  return <ConnectWalletButton />;
};

export default App;
