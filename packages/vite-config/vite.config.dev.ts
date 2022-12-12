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
      'HASURA_API_URL',
      'HASURA_API_KEY',
      'ALCHEMY_SECRET_KEY',
      'FUNCTIONS_API',
      'PAPER_CLIENT_ID',
      'SUPABASE_API_KEY',
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
