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
    HASURA_API_URL: process.env.HASURA_API_URL,
    HASURA_API_KEY: process.env.HASURA_API_KEY,
    ALCHEMY_SECRET_KEY: process.env.ALCHEMY_SECRET_KEY,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env.PUBLIC_STRIPE_PUBLISHABLE_KEY,
    POAP_API_KEY: process.env.POAP_API_KEY,
    PUBLIC_MAGIC_PUBLISHABLE_KEY: process.env.PUBLIC_MAGIC_PUBLISHABLE_KEY,
    SUPABASE_API_KEY: process.env.SUPABASE_API_KEY,
  },
  images: {
    domains: ['assets.poap.xyz', 'www.poap.xyz', 'poap.xyz', 'kqjytgxbtetzewipikax.supabase.co'],
  },
};

export default withTM([
  'ui',
  'ui-tbw',
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
])(nextConfig);
