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
  },
  images: {
    domains: ['https://firebasestorage.googleapis.com'],
  },
};

export default withTM(['ui', 'pure'])(nextConfig);
