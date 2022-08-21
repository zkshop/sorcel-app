/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    HASURA_API_URL: process.env.HASURA_API_URL,
    HASURA_API_KEY: process.env.HASURA_API_KEY,
  },
};

export default nextConfig;
