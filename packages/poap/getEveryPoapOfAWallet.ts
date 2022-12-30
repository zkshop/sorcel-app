import { envVars } from '@3shop/config';
import axios from 'axios';
import type { Poap } from './Poap';

export const getEveryPOAPOfAWallet = async (address: string): Promise<Poap[]> => {
  const url = `${envVars.PUBLIC_FUNCTIONS_URL}/api/shop/poap/${address}`;
  try {
    const { data } = await axios.get(url);

    return data.data;
  } catch (e) {
    console.error(e);
  }

  return [];
};
