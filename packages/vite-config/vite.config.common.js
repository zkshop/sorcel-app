// import type { UserConfigExport } from 'vite';
import react from '@vitejs/plugin-react';
import EnvironmentPlugin from 'vite-plugin-environment';
import nodePolyfills from 'rollup-plugin-polyfill-node';

export const createCommonConfig = (envVars) => ({
  plugins: [react(), EnvironmentPlugin(envVars)],
  build: {
    rollupOptions: {
      plugins: [nodePolyfills()],
    },
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});

/**
 * TODO: move to typescript
 * * The actual problem is we can't import typescript directly in the vite.config.ts file
 * ? We need to transpile before the package before ?
 */
