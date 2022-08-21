const convertUSDToETH = (usd: number, ETHUSDPrice: number): number => {
  return usd / ETHUSDPrice;
};

export default convertUSDToETH;
