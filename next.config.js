/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },

  // Autoriser l'accès depuis ton réseau local (pour tester sur téléphone)
  allowedDevOrigins: ['192.168.1.24'],
};

module.exports = nextConfig;