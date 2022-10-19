/** @type {import('next').NextConfig} */

import withTM from 'next-transpile-modules';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    HOSTNAME: process.env.HOSTNAME,
    APP_ID: process.env.APP_ID,
    HASURA_API_URL: process.env.HASURA_API_URL,
    HASURA_API_KEY: process.env.HASURA_API_KEY,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env.PUBLIC_STRIPE_PUBLISHABLE_KEY,
    POAP_API_KEY: process.env.POAP_API_KEY,
    PUBLIC_MAGIC_PUBLISHABLE_KEY: process.env.PUBLIC_MAGIC_PUBLISHABLE_KEY,
    SUPABASE_API_KEY: process.env.SUPABASE_API_KEY,
  },
  images: {
    domains: [
      'firebasestorage.googleapis.com',
      'assets.poap.xyz',
      'www.poap.xyz',
      'poap.xyz',
      'kqjytgxbtetzewipikax.supabase.co',
      'media.discordapp.net',
      'cdn.discordapp.com',
    ],
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
])(nextConfig);
