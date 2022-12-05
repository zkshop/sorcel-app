import { Gate } from 'apollo';

export const findProductGates = (id: string, gates?: Gate[]) => {
  if (!gates) {
    return [];
  }

  const filteredGates = gates.filter((gate) => gate.product_id === id);
  return filteredGates;
};
