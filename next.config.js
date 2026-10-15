/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: 'export',
  outputFileTracingRoot: __dirname,
};

module.exports = nextConfig;