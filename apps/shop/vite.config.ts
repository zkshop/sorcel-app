import { defineConfig, loadEnv } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import { createCommonConfig } from '@3shop/vite-config/vite.config.common.js';
import dotenv from 'dotenv-vault-core';

dotenv.config();

/* 
  null: will not fail if the environment variable is missing.
  undefined: will fail if the environment variable is missing.
*/
const envVars = {
  APP_ID: null,
  GITHUB_ACTIONS: false,
  NETWORK: null,
  PAPER_CLIENT_ID: undefined,
  PUBLIC_FUNCTIONS_URL: undefined,
  PUBLIC_HASURA_API_URL: undefined,
  PUBLIC_MAGIC_PUBLISHABLE_KEY: undefined,
  PUBLIC_STRIPE_PUBLISHABLE_KEY: undefined,
  SECRET_AIRTABLE: undefined,
  SECRET_ALCHEMY: undefined,
  SECRET_HASURA: undefined,
  SECRET_MAGIC: undefined,
  SECRET_POAP: undefined,
  SECRET_RUDDERSTACK: undefined,
  SECRET_JWT: undefined,
  SECRET_PAPER: undefined,
  SECRET_STRIPE: undefined,
  SECRET_SUPABASE: undefined,
  SECRET_CENTER: undefined,
};

const dirname = __dirname;

const commonConfig = createCommonConfig({ envVars, dirname });

export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), '') };

  return {
    ...commonConfig,
    server: {
      port: 4000,
    },
    plugins: [
      ...commonConfig.plugins,
      createHtmlPlugin({
        inject: {
          data: {
            SET_APP_ID: `
              <script type="text/javascript">
                window.__3SHOP_APP_ID__ = "${process.env.APP_ID}";
                window.__3SHOP_NETWORK__ = "${process.env.NETWORK}";
              </script>
            `,
          },
        },
      }),
    ],
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
  };
});
