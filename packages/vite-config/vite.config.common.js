import path from 'path';
import react from '@vitejs/plugin-react';
import nodePolyfills from 'rollup-plugin-polyfill-node';
import EnvironmentPlugin from 'vite-plugin-environment';
import Unfonts from 'unplugin-fonts/vite';

export const createCommonConfig = (options) => {
  const { dirname, envVars = [] } = options;

  return {
    plugins: [
      react(),
      EnvironmentPlugin(envVars),
      Unfonts({
        google: { families: [{ name: 'Inter', styles: 'wght@400;500;600;700;800;900' }] },
      }),
      nodePolyfills({
        process: true,
        buffer: true,
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(dirname, './src'),
      },
    },
    optimizeDeps: {
      target: 'es2020',
      esbuildOptions: {
        define: {
          global: 'globalThis',
        },
      },
    },
    build: {
      target: 'es2020',
      rollupOptions: {
        plugins: [nodePolyfills()],
      },
      commonjsOptions: {
        transformMixedEsModules: true,
      },
    },
  };
};

/**
 * TODO: move to typescript
 * * The actual problem is we can't import typescript directly in the vite.config.ts file
 * ? We need to transpile before the package before ?
 */
