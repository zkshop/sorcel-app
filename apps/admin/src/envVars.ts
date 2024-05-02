import { z } from 'zod';

const envVars = {
  POSTHOG_KEY: process.env.POSTHOG_KEY,
  SECRET_CENTER: process.env.SECRET_CENTER,
  MONTHLY_PRO_PLAN_CHECKOUT_LINK: process.env.MONTHLY_PRO_PLAN_CHECKOUT_LINK,
  YEARLY_PRO_PLAN_CHECKOUT_LINK: process.env.YEARLY_PRO_PLAN_CHECKOUT_LINK,
  PUBLIC_HASURA_API_URL: process.env.PUBLIC_HASURA_API_URL,
  SECRET_HASURA: process.env.SECRET_HASURA,
  SERVERLESS_API_KEY: process.env.SERVERLESS_API_KEY,
  PUBLIC_FUNCTIONS_URL: process.env.PUBLIC_FUNCTIONS_URL,
  SECRET_ALCHEMY: process.env.SECRET_ALCHEMY,
  SECRET_SUPABASE: process.env.SECRET_SUPABASE,
  PUBLIC_MAGIC_PUBLISHABLE_KEY: process.env.PUBLIC_MAGIC_PUBLISHABLE_KEY,
  NETWORK: process.env.NETWORK,
  BACKEND_BASEURL: process.env.BACKEND_BASEURL,
  PORT: process.env.PORT,
};

const envVariables = z.object({
  POSTHOG_KEY: z.string(),
  SECRET_CENTER: z.string(),
  MONTHLY_PRO_PLAN_CHECKOUT_LINK: z.string(),
  YEARLY_PRO_PLAN_CHECKOUT_LINK: z.string(),
  PUBLIC_HASURA_API_URL: z.string(),
  SECRET_HASURA: z.string(),
  SERVERLESS_API_KEY: z.string(),
  PUBLIC_FUNCTIONS_URL: z.string(),
  SECRET_ALCHEMY: z.string(),
  SECRET_SUPABASE: z.string(),
  PUBLIC_MAGIC_PUBLISHABLE_KEY: z.string(),
  NETWORK: z.string(),
  BACKEND_BASEURL: z.string(),
  PORT: z.string(),
});

console.log(process.env.BACKEND_BASEURL);
envVariables.parse(process.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVariables> {}
  }
}

export { envVars };
