import { ConnectWalletButton, useAccount } from '@3shop/wallet';
import { useEffect } from 'react';

const App = ({}) => {
  const { isConnected } = useAccount();

  useEffect(() => {
    if (isConnected) {
      // @ts-ignore
      window.isWalletConnected = true;
    }
  }, [isConnected]);

  return <ConnectWalletButton />;
};

export default App;
