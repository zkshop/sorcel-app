import { defineConfig } from 'vite';
import { createCommonConfig } from '@3shop/vite-config/vite.config.common';

const envVars = [
  'APP_ID',
  'PAPER_CLIENT_ID',
  'PUBLIC_MAGIC_PUBLISHABLE_KEY',
  'PUBLIC_FUNCTIONS_URL',
  'PUBLIC_HASURA_API_URL',
  'SECRET_ALCHEMY',
  'SECRET_HASURA',
  'SECRET_MAGIC',
  'SECRET_SUPABASE',
];

const commonConfig = createCommonConfig(envVars);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default defineConfig(({ command, mode }) => ({
  ...commonConfig,
  build: {
    ...commonConfig.build,
    rollupOptions: {
      ...commonConfig.build?.rollupOptions,
      output: {
        inlineDynamicImports: true,
        entryFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      },
    },
  },
}));
