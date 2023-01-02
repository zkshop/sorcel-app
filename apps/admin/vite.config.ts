import { defineConfig } from 'vite';
import { createCommonConfig } from '@3shop/vite-config/vite.config.common';

const envVars = [
  'PUBLIC_FUNCTIONS_URL',
  'PUBLIC_HASURA_API_URL',
  'PUBLIC_MAGIC_PUBLISHABLE_KEY',
  'SECRET_ALCHEMY',
  'SECRET_HASURA',
  'SECRET_MAGIC',
  'SECRET_SUPABASE',
  'SECRET_POAP',
];

const commonConfig = createCommonConfig(envVars);

export default defineConfig({
  ...commonConfig,
});