import { defineConfig } from 'vite';

import path from 'path';
import react from '@vitejs/plugin-react';
import EnvironmentPlugin from 'vite-plugin-environment';
import Unfonts from 'unplugin-fonts/vite';

const ENV_VARIABLES = {
  NETWORK: null,
  PAPER_CLIENT_ID: undefined,
  PAPER_KEY_MANAGER_TOKEN: undefined,
  PLAYWRIGHT_TEST_BASE_URL: undefined,
  PUBLIC_FUNCTIONS_URL: undefined,
  PUBLIC_HASURA_API_URL: undefined,
  PUBLIC_MAGIC_PUBLISHABLE_KEY: undefined,
  PUBLIC_STRIPE_PUBLISHABLE_KEY: undefined,
  SECRET_AIRTABLE: undefined,
  SECRET_ALCHEMY: undefined,
  SECRET_CENTER: undefined,
  SECRET_HASURA: undefined,
  SECRET_JWT: undefined,
  SECRET_MAGIC: undefined,
  SECRET_PAPER: undefined,
  SECRET_POAP: undefined,
  SECRET_RUDDERSTACK: undefined,
  SECRET_STRIPE: undefined,
  SECRET_SUPABASE: undefined,
  MONTHLY_PRO_PLAN_CHECKOUT_LINK: undefined,
  YEARLY_PRO_PLAN_CHECKOUT_LINK: undefined,
  STRIPE_WEBHOOK_SECRET: undefined,
  WALLET_CONNECT_PROJECT_ID: undefined,
  POSTHOG_KEY: undefined,
  SECRET_BREVO: undefined,
  SERVERLESS_API_KEY: undefined,
  BACKEND_BASEURL: '',
  PORT: '',
  SORCEL_DEV_BACKEND_PORT: process.env.SORCEL_DEV_BACKEND_PORT,
};

const dirname = __dirname;

export default defineConfig({
  plugins: [
    react(),
    EnvironmentPlugin(ENV_VARIABLES),
    Unfonts({ google: { families: [{ name: 'Inter', styles: 'wght@400;500;600;700;800;900' }] } }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(dirname, './src'),
    },
  },
  build: {
    sourcemap: false,
  },
});
