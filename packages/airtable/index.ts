import Airtable from 'airtable';

const base = 'appRyLJuVEk6CjBGE';

export const deliveryTaxesByZone = new Airtable({
  apiKey: process.env.SECRET_AIRTABLE,
}).base(base);
