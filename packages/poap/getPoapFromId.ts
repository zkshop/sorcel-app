import { httpServerless } from '@3shop/http-serverless';

import type { Poap } from './Poap';

export const getPOAPFromId = async (id: string) => {
  const url = `api/shop/poap/events`;
  const { data } = await httpServerless.get<{ data: Poap }>(url, { params: id });

  return data.data;
};
