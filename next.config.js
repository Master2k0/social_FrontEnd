/** @type {import('next').NextConfig} */
const withTwin = require("./next-twin.js");
const nextConfig = {
  reactStrictMode: false,
};

module.exports = withTwin(nextConfig);
