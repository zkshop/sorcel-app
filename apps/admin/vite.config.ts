import { defineConfig } from 'vite';
import { createCommonConfig } from '@3shop/vite-config/vite.config.common';
import Unfonts from 'unplugin-fonts/vite';

const envVars = [
  'PUBLIC_FUNCTIONS_URL',
  'PUBLIC_HASURA_API_URL',
  'PUBLIC_MAGIC_PUBLISHABLE_KEY',
  'SECRET_ALCHEMY',
  'SECRET_HASURA',
  'SECRET_MAGIC',
  'SECRET_SUPABASE',
  'SECRET_POAP',
  'SECRET_CENTER',
  'MONTHLY_PRO_PLAN_CHECKOUT_LINK',
  'YEARLY_PRO_PLAN_CHECKOUT_LINK',
];

const dirname = __dirname;

const commonConfig = createCommonConfig({ envVars, dirname });

export default defineConfig({
  ...commonConfig,
  plugins: [
    ...commonConfig.plugins,
    Unfonts({ google: { families: [{ name: 'Inter', styles: 'wght@400;500;600;700;800;900' }] } }),
  ],
});
