import { parseEther } from 'ethers/lib/utils';
import { useEffect, useState } from 'react';
import { usePrepareSendTransaction, useSendTransaction, useWaitForTransaction } from 'wagmi';

import convertUSDToETH from '../utils/convertUSDToETH';

import getETHUSDprice from 'pages/api/getETHUSDPrice';

const SHOP_WALLET = '0xDdB12A8AaD6549b4cAe70bF598Cc2B94dCB11d26';

const useTransaction = (usdAmount: number) => {
  const [ETHUSDPrice, setETHUSDPrice] = useState(1);
  const ethAmount = convertUSDToETH(usdAmount, ETHUSDPrice);

  useEffect(() => {
    getETHUSDprice().then((price) => {
      setETHUSDPrice(price);
    });
  }, []);

  const { config } = usePrepareSendTransaction({
    request: {
      to: SHOP_WALLET,
      value: parseEther(ethAmount.toString()),
    },
  });

  const { data, sendTransaction } = useSendTransaction(config);

  const { isLoading, isSuccess, isError } = useWaitForTransaction({
    hash: data?.hash,
  });

  return {
    sendTransaction,
    isLoading,
    isSuccess,
    isError,
    hash: data?.hash,
  };
};

export default useTransaction;
