import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import EnvironmentPlugin from 'vite-plugin-environment';
import nodePolyfills from 'vite-plugin-node-stdlib-browser';

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [
      react(),
      EnvironmentPlugin(
        [
          'HASURA_API_URL',
          'HASURA_API_KEY',
          'ALCHEMY_SECRET_KEY',
          'APP_ID',
          'FUNCTIONS_API',
          'SUPABASE_API_KEY',
        ],
        nodePolyfills(),
      ),
    ],
    build: {
      target: 'es2020',
    },
  });
};
