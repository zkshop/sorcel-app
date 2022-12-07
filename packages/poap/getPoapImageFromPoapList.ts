export function getPoapImageFromPoapList(poapId: string, poapList: any[]) {
  const poap = poapList.find(({ id }) => id === poapId);

  if (poap) return poap.image_url;
}
