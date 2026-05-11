/** @type {import('next').NextConfig} */
const nextConfig = {
  // Increase SSG timeout — 48 company pages built in parallel can exhaust the 60s default
  staticPageGenerationTimeout: 180,

  // Limit concurrent SSG workers to reduce memory pressure during build
  experimental: {
    cpus: 2,
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rovia.money',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
