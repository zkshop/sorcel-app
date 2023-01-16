import type { DeliveryTaxesClient, DeliveryTaxesData } from './DeliveryTaxesClient';

type DeliveryTaxesServiceType = {
  getDeliveryTaxesByZone(tableName: string): Promise<DeliveryTaxesData[]>;
};

export function DeliveryTaxesService(client: DeliveryTaxesClient): DeliveryTaxesServiceType {
  return {
    getDeliveryTaxesByZone: async (tableName: string) =>
      await client.getDeliveryTaxesByZone(tableName),
  };
}
