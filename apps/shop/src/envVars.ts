import { mapWindowAttributeToEnvVar } from '@3shop/config';

const envVars = {
  APP_ID: mapWindowAttributeToEnvVar('APP_ID'),
  SECRET_CENTER: 'key0496d7622616d32fbb5f9595',
  PUBLIC_HASURA_API_URL: process.env.PUBLIC_HASURA_API_URL,
  SECRET_HASURA: process.env.SECRET_HASURA,
  PUBLIC_MAGIC_PUBLISHABLE_KEY: process.env.PUBLIC_MAGIC_PUBLISHABLE_KEY,
  PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env.PUBLIC_STRIPE_PUBLISHABLE_KEY,
  SERVERLESS_API_KEY: process.env.SERVERLESS_API_KEY,
  PUBLIC_FUNCTIONS_URL: process.env.PUBLIC_FUNCTIONS_URL,
  SECRET_ALCHEMY: process.env.SECRET_ALCHEMY,
  SECRET_BREVO: process.env.SECRET_BREVO,
  NETWORK: mapWindowAttributeToEnvVar('NETWORK'),
};

export { envVars };
