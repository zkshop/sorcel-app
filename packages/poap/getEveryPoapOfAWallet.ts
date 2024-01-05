import { httpServerless } from '@3shop/http-serverless';
import type { Poap } from './Poap';

export const getEveryPOAPOfAWallet = async (address: string): Promise<Poap[]> => {
  const url = `api/shop/poap/${address}`;
  try {
    const { data } = await httpServerless.get(url);

    return data.data;
  } catch (e) {
    console.error(e);
  }

  return [];
};
