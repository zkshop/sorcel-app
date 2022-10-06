export function toNumber(str?: string) {
  if (!str) return;
  return str && Number(str);
}
