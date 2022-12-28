// import type { UserConfigExport } from 'vite';
import react from '@vitejs/plugin-react';
import EnvironmentPlugin from 'vite-plugin-environment';
import inject from '@rollup/plugin-inject';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import nodePolyfills from 'rollup-plugin-polyfill-node';

export const createCommonConfig = (envVars) => ({
  plugins: [
    react(),
    inject({
      util: 'util/',
    }),
    EnvironmentPlugin(envVars),
  ],
  define: {
    'process.env': envVars.reduce((acc, varName) => {
      acc[varName] = `${process.env[varName]}`;
      return acc;
    }, {}),
  },
  build: {
    target: 'es2020',
    rollupOptions: {
      plugins: [nodePolyfills()],
      output: {
        inlineDynamicImports: true,
        entryFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      },
    },
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2020',
      plugins: [
        NodeGlobalsPolyfillPlugin({
          buffer: true,
        }),
      ],
    },
  },
});

/**
 * TODO: Refactor check all plugins
 * TODO: move to typescript
 * TODO : move all vite apps to vite 4
 * * The actual problem is we can't import typescript directly in the vite.config.ts file
 * ? We need to transpile before the package before ?
 */
