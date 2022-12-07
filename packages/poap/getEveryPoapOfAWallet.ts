import axios from 'axios';
import { Poap } from './Poap';

export const getEveryPOAPOfAWallet = async (address: string): Promise<Poap[]> => {
  try {
    const { data } = await axios.get(`/api/poap/${address}`);

    return data.data;
  } catch (e) {
    console.error(e);
  }

  return [];
};
