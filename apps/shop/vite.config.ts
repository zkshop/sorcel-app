import { defineConfig, loadEnv } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import { createCommonConfig } from '@3shop/vite-config/vite.config.common.js';

const envVars = {
  APP_ID: null, // Optional: will not fail if the APP_ID environment variable is missing.
  GITHUB_ACTIONS: false, // Is this running in a GitHub Actions environment?
  PAPER_CLIENT_ID: undefined,
  PUBLIC_FUNCTIONS_URL: undefined,
  PUBLIC_HASURA_API_URL: undefined,
  PUBLIC_MAGIC_PUBLISHABLE_KEY: undefined,
  PUBLIC_STRIPE_PUBLISHABLE_KEY: undefined,
  SECRET_ALCHEMY: undefined,
  SECRET_HASURA: undefined,
  SECRET_MAGIC: undefined,
  SECRET_POAP: undefined,
  SECRET_AIRTABLE: undefined,
  SECRET_RUDDERSTACK: undefined,
  NETWORK: undefined,
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
              <script type="text/javascript">window.__3SHOP_APP_ID__ = "${process.env.APP_ID}";</script>
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
