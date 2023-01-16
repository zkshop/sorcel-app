export type DeliveryTaxesData = {
  name: string;
  fees: number;
  countries: string[];
};

export type DeliveryTaxesClient = {
  getDeliveryTaxesByZone(tableName: string): Promise<DeliveryTaxesData[]>;
};
