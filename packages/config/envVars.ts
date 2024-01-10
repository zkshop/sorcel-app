import { withEnv } from "../../apps/functions/serverless/middlewares";
withEnv(() => {}, 'envVars');

const NODE_ENV = process.env.NODE_ENV || 'development';
const GITHUB_ACTIONS = process.env.GITHUB_ACTIONS || false;

type WindowEnvVar = 'APP_ID' | 'NETWORK' | 'PRODUCT_ID';

function getWindowEnvVar(name: WindowEnvVar) {
  if (NODE_ENV === 'production' || GITHUB_ACTIONS) {
    if (typeof window === 'undefined') return process.env[name];
    // @ts-ignore
    return window[`__3SHOP_${name}__`];
  }

  return process.env[name];
}

const envVars = {
  SECRET_SUPABASE: process.env.SECRET_SUPABASE,
  SECRET_STRIPE: process.env.SECRET_STRIPE,
  SECRET_RUDDERSTACK: '2K5u9A4bXrAezmrsx75x1DBJTg5',
  SECRET_POAP: process.env.SECRET_POAP,
  SECRET_PAPER: process.env.SECRET_PAPER,
  SECRET_MAGIC: process.env.SECRET_MAGIC,
  SECRET_JWT: process.env.SECRET_JWT,
  SECRET_HASURA: process.env.SECRET_HASURA,
  SECRET_CENTER: 'key0496d7622616d32fbb5f9595',
  SECRET_ALCHEMY: process.env.SECRET_ALCHEMY,
  SECRET_AIRTABLE: process.env.SECRET_AIRTABLE,
  POSTHOG_KEY: process.env.POSTHOG_KEY,
  PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env.PUBLIC_STRIPE_PUBLISHABLE_KEY,
  PUBLIC_MAGIC_PUBLISHABLE_KEY: process.env.PUBLIC_MAGIC_PUBLISHABLE_KEY,
  PUBLIC_HASURA_API_URL: process.env.PUBLIC_HASURA_API_URL,
  PUBLIC_FUNCTIONS_URL: process.env.PUBLIC_FUNCTIONS_URL,
  PAPER_CLIENT_ID: process.env.PAPER_CLIENT_ID,
  NODE_ENV,
  NETWORK: getWindowEnvVar('NETWORK'),
  MONTHLY_PRO_PLAN_CHECKOUT_LINK: process.env.MONTHLY_PRO_PLAN_CHECKOUT_LINK,
  YEARLY_PRO_PLAN_CHECKOUT_LINK: process.env.YEARLY_PRO_PLAN_CHECKOUT_LINK,
  APP_ID: getWindowEnvVar('APP_ID'),
  WALLET_CONNECT_PROJECT_ID: process.env.WALLET_CONNECT_PROJECT_ID,
  SORCEL_PRODUCT_ID: getWindowEnvVar('PRODUCT_ID'),
};

export { envVars };
