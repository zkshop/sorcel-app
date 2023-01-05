import { defineConfig } from 'vite';
import { createCommonConfig } from '@3shop/vite-config/vite.config.common.js';

const envVars = [
  'APP_ID',
  'PAPER_CLIENT_ID',
  'PUBLIC_MAGIC_PUBLISHABLE_KEY',
  'PUBLIC_FUNCTIONS_URL',
  'PUBLIC_HASURA_API_URL',
  'SECRET_ALCHEMY',
  'SECRET_HASURA',
  'SECRET_MAGIC',
  'PUBLIC_STRIPE_PUBLISHABLE_KEY',
  'SECRET_POAP',
];

const dirname = __dirname;

const commonConfig = createCommonConfig({ envVars, dirname });

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default defineConfig(({ command, mode }) => ({
  ...commonConfig,
  server: {
    port: 4000,
  },
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
