const COINSTATS_ETH_USD_URL = 'https://api.coinstats.app/public/v1/coins/ethereum?currency=usd';

type TGetETHUSDprice = () => Promise<number>;

const getETHUSDprice: TGetETHUSDprice = async () => {
  const response = await fetch(COINSTATS_ETH_USD_URL).then((response) => response.json());

  return response.coin.price;
};

export default getETHUSDprice;
