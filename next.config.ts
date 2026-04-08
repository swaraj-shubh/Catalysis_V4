/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drive.google.com',
      },
      {
        protocol: 'https',
        hostname: 'docs.google.com',
      }
    ],
    minimumCacheTTL: 2592000,
  },
};

export default nextConfig;