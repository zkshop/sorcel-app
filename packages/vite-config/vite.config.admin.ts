import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import EnvironmentPlugin from 'vite-plugin-environment';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import inject from '@rollup/plugin-inject';
import nodePolyfills from 'rollup-plugin-polyfill-node';

// https://vitejs.dev/config/
export default defineConfig({
  // Node.js global to browser globalThis
  // define: {
  //   global: "globalThis",
  // },
  plugins: [
    react(),
    inject({
      util: 'util/',
    }),
    EnvironmentPlugin([
      'PUBLIC_FUNCTIONS_URL',
      'PUBLIC_HASURA_API_URL',
      'PUBLIC_MAGIC_PUBLISHABLE_KEY',
      'SECRET_ALCHEMY',
      'SECRET_HASURA',
      'SECRET_MAGIC',
      'SECRET_SUPABASE',
    ]),
  ],
  define: {
    'process.env': {
      PUBLIC_FUNCTIONS_URL: `${process.env.PUBLIC_FUNCTIONS_URL}`,
      PUBLIC_HASURA_API_URL: `${process.env.PUBLIC_HASURA_API_URL}`,
      PUBLIC_MAGIC_PUBLISHABLE_KEY: `${process.env.PUBLIC_MAGIC_PUBLISHABLE_KEY}`,
      SECRET_ALCHEMY: `${process.env.SECRET_ALCHEMY}`,
      SECRET_HASURA: `${process.env.SECRET_HASURA}`,
      SECRET_MAGIC: `${process.env.SECRET_MAGIC}`,
      SECRET_SUPABASE: `${process.env.SECRET_SUPABASE}`,
    },
  },
  build: {
    target: 'es2020',
    rollupOptions: {
      plugins: [nodePolyfills()],
      output: {
        inlineDynamicImports: true,
        entryFileNames: '[name].js', // currently does not work for the legacy bundle
        assetFileNames: '[name].[ext]', // currently does not work for images
      },
    },
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2020',
      // Node.js global to browser globalThis
      // define: {
      //   global: "globalThis",
      // },
      // Enable esbuild polyfill plugins
      plugins: [
        NodeGlobalsPolyfillPlugin({
          buffer: true,
        }),
      ],
    },
  },
});
