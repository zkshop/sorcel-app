import type { ShopGate_v2 } from './ProductListContainer';

export const findProductGates = (id: string, gates?: ShopGate_v2[]) => {
  if (!gates) {
    return [];
  }

  const filteredGates = gates.filter((gate) => gate.product_id === id);
  return filteredGates;
};
