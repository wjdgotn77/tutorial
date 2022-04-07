const { redirect } = require('next/dist/server/api-utils');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/prev/:path',
        destination: '/new/:path',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
