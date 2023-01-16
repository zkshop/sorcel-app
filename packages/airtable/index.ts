import Airtable from 'airtable';
import { envVars } from '@3shop/config';
console.log({ airtable: envVars.SECRET_AIRTABLE });

export const deliveryTaxesByZone = new Airtable({
  apiKey: 'pat3n1I1eIUG5j1It.bdd3f129a145d5194df40e0b5870ce527bcbdfef80f5b65f3045eb5228639f0a',
}).base('appRyLJuVEk6CjBGE');
