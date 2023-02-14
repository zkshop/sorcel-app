import type { DeliveryTaxesClient, DeliveryTaxesData } from '@3shop/domains';
import { deliveryTaxesByZone } from '../airtable';

const GRID_VIEW = 'Grid view' as const;
const MAX_RECORDS = 3 as const;
const DELIVERY_TAXES_ATTRIBUTES = {
  name: 'Area name',
  fees: 'fees',
  countries: 'countries',
} as const;

function wrappedDeliveryTaxesByZone(tableName: string): Promise<DeliveryTaxesData[]> {
  return new Promise((resolve) => {
    deliveryTaxesByZone(tableName)
      .select({
        view: GRID_VIEW,
        maxRecords: MAX_RECORDS,
      })
      .eachPage((records: any) => {
        const result = records.map((record: any) => ({
          name: record.get(DELIVERY_TAXES_ATTRIBUTES.name) as string,
          fees: record.get(DELIVERY_TAXES_ATTRIBUTES.fees) as number,
          countries: record.get(DELIVERY_TAXES_ATTRIBUTES.countries) as string[],
        }));

        resolve(result);
      });
  });
}

export function ShopDeliveryTaxesClient(): DeliveryTaxesClient {
  return {
    getDeliveryTaxesByZone: async (tableName: string) =>
      await wrappedDeliveryTaxesByZone(tableName),
  };
}
