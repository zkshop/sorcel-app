/** @type {import('next').NextConfig} */

import withTM from 'next-transpile-modules';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
      http: false,
    };

    return config;
  },
  env: {
    APP_ID: process.env.APP_ID,
    PUBLIC_FUNCTIONS_URL: process.env.PUBLIC_FUNCTIONS_URL,
    PUBLIC_HASURA_API_URL: process.env.PUBLIC_HASURA_API_URL,
    PUBLIC_MAGIC_PUBLISHABLE_KEY: process.env.PUBLIC_MAGIC_PUBLISHABLE_KEY,
    PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env.PUBLIC_STRIPE_PUBLISHABLE_KEY,
    SECRET_ALCHEMY: process.env.SECRET_ALCHEMY,
    SECRET_HASURA: process.env.SECRET_HASURA,
    SECRET_POAP: process.env.SECRET_POAP,
    SECRET_STRIPE: process.env.SECRET_STRIPE,
    SECRET_SUPABASE: process.env.SECRET_SUPABASE,
    VERCEL_URL: process.env.VERCEL_URL,
  },
  images: {
    domains: ['assets.poap.xyz', 'www.poap.xyz', 'poap.xyz', 'kqjytgxbtetzewipikax.supabase.co'],
  },
};

export default withTM([
  '@3shop/alchemy',
  '@3shop/apollo',
  '@3shop/config',
  '@3shop/domains',
  '@3shop/infra',
  '@3shop/magic',
  '@3shop/messages',
  '@3shop/poap',
  '@3shop/pure',
  '@3shop/sendinblue',
  '@3shop/store',
  '@3shop/supabase',
  '@3shop/types',
  '@3shop/ui',
  '@3shop/validation',
])(nextConfig);
