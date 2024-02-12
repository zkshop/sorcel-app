import { mapWindowAttributeToEnvVar } from '@3shop/config';

const envVars = {
  SERVERLESS_API_KEY: process.env.SERVERLESS_API_KEY,
  SECRET_ALCHEMY: process.env.SECRET_ALCHEMY,
  SORCEL_PRODUCT_ID: mapWindowAttributeToEnvVar('PRODUCT_ID'),
  PUBLIC_FUNCTIONS_URL: process.env.PUBLIC_FUNCTIONS_URL,
};

export { envVars };
