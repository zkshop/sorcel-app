/** @type {import('next').NextConfig} */

import withTM from "next-transpile-modules";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    HASURA_API_URL: process.env.HASURA_API_URL,
    HASURA_API_KEY: process.env.HASURA_API_KEY,
  },
  images: {
    domains: ["https://firebasestorage.googleapis.com"],
  },
};

export default withTM(["ui"])(nextConfig);
