import type { Nullable } from '@3shop/types';

export function getPoapImageFromPoapList(poapList: any[], poapId?: Nullable<number>) {
  if (!poapId) return;

  const poap = poapList.find(({ id }) => id === poapId);

  if (poap) return poap.image_url;
}
