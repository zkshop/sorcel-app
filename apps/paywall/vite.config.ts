import { defineConfig, loadEnv } from 'vite';
import { createCommonConfig } from '@3shop/vite-config/vite.config.common.js';
import { createHtmlPlugin } from 'vite-plugin-html';

const dirname = __dirname;

const envVars = {
  SERVERLESS_API_KEY: '',
  SECRET_ALCHEMY: '',
  PUBLIC_FUNCTIONS_URL: undefined,
  SORCEL_PRODUCT_ID: undefined,
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
