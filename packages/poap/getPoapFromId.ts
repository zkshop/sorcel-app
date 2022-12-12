import axios from 'axios';
import type { Poap } from './Poap';

export const getPOAPFromId = async (id: string) => {
  const { data } = await axios.get<{ data: Poap }>(`/api/poap/events/id/${id}`);

  return data.data;
};
