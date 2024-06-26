import { defineConfig, loadEnv } from 'vite';
import { createCommonConfig } from '@3shop/vite-config/vite.config.common.js';
import { createHtmlPlugin } from 'vite-plugin-html';

const dirname = __dirname;

const envVars = {
  APP_ID: null,
  GITHUB_ACTIONS: false,
  NETWORK: null,
  PAPER_CLIENT_ID: null,
  PUBLIC_FUNCTIONS_URL: null,
  PUBLIC_HASURA_API_URL: null,
  PUBLIC_MAGIC_PUBLISHABLE_KEY: null,
  PUBLIC_STRIPE_PUBLISHABLE_KEY: null,
  SECRET_AIRTABLE: null,
  SECRET_ALCHEMY: null,
  SECRET_HASURA: null,
  SECRET_MAGIC: null,
  SECRET_POAP: null,
  SECRET_RUDDERSTACK: null,
  SECRET_JWT: null,
  SECRET_PAPER: null,
  SECRET_STRIPE: null,
  SECRET_SUPABASE: null,
  SECRET_CENTER: null,
  POSTHOG_KEY: null,
};

const commonConfig = createCommonConfig({ dirname, envVars });

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), '') };

  return {
    ...commonConfig,
    server: {
      port: 4001,
    },
    plugins: [
      ...commonConfig.plugins,
      createHtmlPlugin({
        inject: {
          data: {
            SET_APP_ID: `
              <script type="text/javascript">
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
