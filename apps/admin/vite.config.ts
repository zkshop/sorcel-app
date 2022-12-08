import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import EnvironmentPlugin from 'vite-plugin-environment';

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [
      react(),
      EnvironmentPlugin(['HASURA_API_URL', 'HASURA_API_KEY', 'ALCHEMY_SECRET_KEY', 'APP_ID']),
    ],
    build: {
      target: 'es2020',
    },
  });
};
