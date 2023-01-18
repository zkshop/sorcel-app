import Airtable from 'airtable';
import { envVars } from '@3shop/config';

const base = 'appRyLJuVEk6CjBGE';

export const deliveryTaxesByZone = new Airtable({
  apiKey: envVars.SECRET_AIRTABLE,
}).base(base);
