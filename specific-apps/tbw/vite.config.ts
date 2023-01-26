import { defineConfig, loadEnv } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import { createCommonConfig } from '@3shop/vite-config/vite.config.common';

const envVars = {
  APP_ID: null,
  NETWORK: undefined,
  PAPER_CLIENT_ID: undefined,
  PUBLIC_FUNCTIONS_URL: undefined,
  PUBLIC_HASURA_API_URL: undefined,
  PUBLIC_MAGIC_PUBLISHABLE_KEY: undefined,
  SECRET_AIRTABLE: undefined,
  SECRET_ALCHEMY: undefined,
  SECRET_HASURA: undefined,
  SECRET_MAGIC: undefined,
  SECRET_SUPABASE: undefined,
};

const dirname = __dirname;

const commonConfig = createCommonConfig({ envVars, dirname });

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default defineConfig(({ command, mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), '') };

  return {
    ...commonConfig,
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
