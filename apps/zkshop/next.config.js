/** @type {import('next').NextConfig} */

import withTM from 'next-transpile-modules';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    HOSTNAME: process.env.HOSTNAME,
    HASURA_API_URL: process.env.HASURA_API_URL,
    HASURA_API_KEY: process.env.HASURA_API_KEY,
    PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env.PUBLIC_STRIPE_PUBLISHABLE_KEY,
    POAP_API_KEY: process.env.POAP_API_KEY,
    APP_ID: process.env.APP_ID,
    PUBLIC_MAGIC_PUBLISHABLE_KEY: process.env.PUBLIC_MAGIC_PUBLISHABLE_KEY,
  },
  images: {
    domains: ['firebasestorage.googleapis.com', 'assets.poap.xyz', 'www.poap.xyz'],
  },
};

export default withTM(['ui', 'pure', 'domains', 'infra', 'magic', 'alchemy'])(nextConfig);
