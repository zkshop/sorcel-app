import axios from "axios";

export const POAP_BASE_URL = "https://api.poap.tech";

export const poap = axios.create({ baseURL: POAP_BASE_URL });

export const getEveryPoapURL = (address: string) => `/actions/scan/${address}`;

export const getEveryPOAPOfAWallet = async (address: string) => {
  const { data } = await axios.get(`/api/poap/${address}`);

  return data.data;
};
