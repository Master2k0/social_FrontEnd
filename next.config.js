/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    PORT: process.env.PORT,
  },
};

module.exports = nextConfig;
