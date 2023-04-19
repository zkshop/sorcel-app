const NODE_ENV = process.env.NODE_ENV || 'development';
const GITHUB_ACTIONS = process.env.GITHUB_ACTIONS || false;

type WindowEnvVar = 'APP_ID' | 'NETWORK';

function getWindowEnvVar(name: WindowEnvVar) {
  if (NODE_ENV === 'production' || GITHUB_ACTIONS) {
    if (typeof window === 'undefined') return process.env[name];
    // @ts-ignore
    return window[`__3SHOP_${name}__`];
  }

  return process.env[name];
}

const envVars = {
  APP_ID: getWindowEnvVar('APP_ID'),
  NETWORK: getWindowEnvVar('NETWORK'),
  NODE_ENV,
  PAPER_CLIENT_ID: process.env.PAPER_CLIENT_ID,
  PUBLIC_FUNCTIONS_URL: process.env.PUBLIC_FUNCTIONS_URL,
  PUBLIC_HASURA_API_URL: process.env.PUBLIC_HASURA_API_URL,
  PUBLIC_MAGIC_PUBLISHABLE_KEY: process.env.PUBLIC_MAGIC_PUBLISHABLE_KEY,
  PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env.PUBLIC_STRIPE_PUBLISHABLE_KEY,
  SECRET_AIRTABLE: process.env.SECRET_AIRTABLE,
  SECRET_ALCHEMY: process.env.SECRET_ALCHEMY,
  SECRET_HASURA: process.env.SECRET_HASURA,
  SECRET_JWT: process.env.SECRET_JWT,
  SECRET_MAGIC: process.env.SECRET_MAGIC,
  SECRET_PAPER: process.env.SECRET_PAPER,
  SECRET_POAP: process.env.SECRET_POAP,
  SECRET_STRIPE: process.env.SECRET_STRIPE,
  SECRET_SUPABASE: process.env.SECRET_SUPABASE,
  SECRET_RUDDERSTACK: process.env.SECRET_RUDDERSTACK,
  SECRET_CENTER: process.env.SECRET_CENTER,
};

console.log(envVars.PUBLIC_STRIPE_PUBLISHABLE_KEY);

export { envVars };
