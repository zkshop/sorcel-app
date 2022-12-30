import { envVars } from '@3shop/config';
import axios from 'axios';
import type { Poap } from './Poap';

export const getPOAPFromId = async (id: string) => {
  const url = `${envVars.PUBLIC_FUNCTIONS_URL}/api/shop/poap/events/id/${id}`;
  const { data } = await axios.get<{ data: Poap }>(url);

  return data.data;
};
