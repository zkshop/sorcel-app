import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import EnvironmentPlugin from 'vite-plugin-environment';
import inject from '@rollup/plugin-inject';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    inject({
      util: 'util/',
    }),
    EnvironmentPlugin([
      'APP_ID',
      'PAPER_CLIENT_ID',
      'PUBLIC_MAGIC_PUBLISHABLE_KEY',
      'PUBLIC_FUNCTIONS_URL',
      'PUBLIC_HASURA_API_URL',
      'SECRET_ALCHEMY',
      'SECRET_HASURA',
      'SECRET_MAGIC',
      'SECRET_SUPABASE',
    ]),
  ],
  define: {
    'process.env': {},
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2020',
    },
  },
});
