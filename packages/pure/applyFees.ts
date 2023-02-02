const FEES = 2;

export function applyFees(price: number) {
  return (price * FEES) / 100;
}
