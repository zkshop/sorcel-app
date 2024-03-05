import { defineConfig, loadEnv } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import { createCommonConfig } from '@3shop/vite-config/vite.config.common.js';

const envVars = {
  APP_ID: null,
  GITHUB_ACTIONS: false,
  NETWORK: null,
  NODE_DEBUG: false,
  PAPER_CLIENT_ID: undefined,
  PUBLIC_FUNCTIONS_URL: undefined,
  PUBLIC_HASURA_API_URL: undefined,
  PUBLIC_MAGIC_PUBLISHABLE_KEY: undefined,
  PUBLIC_STRIPE_PUBLISHABLE_KEY: undefined,
  SECRET_AIRTABLE: undefined,
  SECRET_ALCHEMY: undefined,
  SECRET_BREVO: undefined,
  SECRET_CENTER: false,
  SECRET_HASURA: undefined,
  SECRET_JWT: undefined,
  SECRET_MAGIC: undefined,
  SECRET_PAPER: undefined,
  SECRET_POAP: undefined,
  SECRET_RUDDERSTACK: undefined,
  SECRET_STRIPE: undefined,
  SECRET_SUPABASE: undefined,
  SERVERLESS_API_KEY: 'test',
  XAMAN_API_KEY: undefined,
  XAMAN_SECRET_KEY: undefined,
  POSTHOG_KEY: null,
  WALLET_CONNECT_PROJECT_ID: undefined,
  MONTHLY_PRO_PLAN_CHECKOUT_LINK: undefined,
  YEARLY_PRO_PLAN_CHECKOUT_LINK: undefined,
  LINK_API_URL: 'https://www.walletlink.org',
  SDK_VERSION: 'unknown',
};

const dirname = __dirname;

const commonConfig = createCommonConfig({ dirname, envVars });

export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), '') };
  process.env['APP_ID'] = "5d1a6537-cfe5-492d-ae1f-97cdea9d2382";
  process.env['XAMAN_API_KEY'] = "de7681ce-0e13-492e-807d-3b79f48c2dd9";
  process.env['XAMAN_SECRET_KEY']  = "63fb6b6a-5f1d-4c13-b05e-5c64fa92bf3d"; 
  console.log(process.env);

  return {
    ...commonConfig,
    server: {
      port: 4000,
    },
    optimizeDeps: {
      ...commonConfig.optimizeDeps,
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
