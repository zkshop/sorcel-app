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
    VERCEL_URL: process.env.VERCEL_URL,
    APP_ID: process.env.APP_ID,
    PUBLIC_HASURA_API_URL: process.env.PUBLIC_HASURA_API_URL,
    SECRET_HASURA: process.env.SECRET_HASURA,
    SECRET_ALCHEMY: process.env.SECRET_ALCHEMY,
    SECRET_STRIPE: process.env.SECRET_STRIPE,
    PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env.PUBLIC_STRIPE_PUBLISHABLE_KEY,
    SECRET_POAP: process.env.SECRET_POAP,
    PUBLIC_MAGIC_PUBLISHABLE_KEY: process.env.PUBLIC_MAGIC_PUBLISHABLE_KEY,
    SECRET_SUPABASE: process.env.SECRET_SUPABASE,
  },
  images: {
    domains: ['assets.poap.xyz', 'www.poap.xyz', 'poap.xyz', 'kqjytgxbtetzewipikax.supabase.co'],
  },
};

export default withTM([
  'ui',
  'pure',
  'domains',
  'infra',
  'magic',
  'alchemy',
  'types',
  'apollo',
  'supabase',
  'sendinblue',
  'validation',
  'store',
  'poap',
  'messages',
])(nextConfig);
