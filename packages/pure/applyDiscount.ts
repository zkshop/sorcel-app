export function applyDiscount(amount: number, discount?: number) {
  if (!discount) {
    return amount;
  }

  return amount - (amount * discount) / 100;
}
