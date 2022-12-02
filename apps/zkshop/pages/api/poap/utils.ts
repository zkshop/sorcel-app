import axios from 'axios';
import { Poap } from 'store/slices/poap';

export const POAP_BASE_URL = 'https://api.poap.tech';

export const poap = axios.create({
  baseURL: POAP_BASE_URL,
  headers: {
    'X-API-Key': process.env.POAP_API_KEY,
  },
});

export const getEveryPoapURL = (address: string) => `/actions/scan/${address}`;

export const getPoapURLFromId = (id: string) => `/events/id/${id}`;

export const getEveryPOAPOfAWallet = async (address: string): Promise<Poap[]> => {
  try {
    const { data } = await axios.get(`/api/poap/${address}`);

    return data.data;
  } catch (e) {
    console.error(e);
  }

  return [];
};

export const getPOAPFromId = async (id: string) => {
  const { data } = await axios.get(`/api/poap/events/id/${id}`);

  return data.data;
};

export const getPOAPListFromIds = async (ids: string[]) => {
  function getAllRequest() {
    const calls = [];
    for (const id of ids) {
      calls.push(getPOAPFromId(id));
    }
    return calls;
  }
  const result: any[] = [];

  await Promise.all(getAllRequest()).then((responseList) =>
    responseList.map((data) => result.push(data)),
  );

  return result;
};
