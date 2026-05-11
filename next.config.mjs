/** @type {import('next').NextConfig} */
const nextConfig = {
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
