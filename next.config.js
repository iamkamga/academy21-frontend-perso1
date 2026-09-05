/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Le projet utilise des <img> classiques : on garde une config images minimale
  // pour être prêt si tu passes à next/image plus tard. Restreint aux domaines
  // réellement référencés dans le code (pas de wildcard '**' pour raisons de sécurité).
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'academytwentyone.com' },
      { protocol: 'https', hostname: 'i.ytimg.com' },
      { protocol: 'https', hostname: 'img.youtube.com' },
    ],
  },
};

// Autorisation d'origine dev uniquement (pour tester sur téléphone via le LAN).
// Inactif en production sur Vercel.
if (process.env.NODE_ENV === 'development') {
  nextConfig.allowedDevOrigins = ['192.168.1.24'];
}

module.exports = nextConfig;
