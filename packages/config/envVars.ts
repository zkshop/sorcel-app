const NODE_ENV = process.env.NODE_ENV || 'development';
const GITHUB_ACTIONS = process.env.GITHUB_ACTIONS || false;

function getAppId() {
  if (NODE_ENV === 'production' || GITHUB_ACTIONS) {
    // @ts-ignore
    return window.__3SHOP_APP_ID__;
  }
  return process.env.APP_ID;
}

const envVars = {
  APP_ID: getAppId(),
  EMAIL_ORDER_TARGET: process.env.EMAIL_ORDER_TARGET,
  NODE_ENV,
  PAPER_CLIENT_ID: process.env.PAPER_CLIENT_ID,
  PUBLIC_FUNCTIONS_URL: process.env.PUBLIC_FUNCTIONS_URL,
  PUBLIC_HASURA_API_URL: process.env.PUBLIC_HASURA_API_URL,
  PUBLIC_MAGIC_PUBLISHABLE_KEY: process.env.PUBLIC_MAGIC_PUBLISHABLE_KEY,
  PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env.PUBLIC_STRIPE_PUBLISHABLE_KEY,
  SECRET_ALCHEMY: process.env.SECRET_ALCHEMY,
  SECRET_HASURA: process.env.SECRET_HASURA,
  SECRET_JWT: process.env.SECRET_JWT,
  SECRET_MAGIC: process.env.SECRET_MAGIC,
  SECRET_PAPER: process.env.SECRET_PAPER,
  SECRET_POAP: process.env.SECRET_POAP,
  SECRET_SENDINBLUE: process.env.SECRET_SENDINBLUE,
  SECRET_STRIPE: process.env.SECRET_STRIPE,
  SECRET_SUPABASE: process.env.SECRET_SUPABASE,
  SECRET_AIRTABLE: process.env.SECRET_AIRTABLE,
};

export { envVars };
