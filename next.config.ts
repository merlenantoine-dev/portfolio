/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    turbo: false, // Désactive Turbopack pour éviter le conflit
  },
  images: {
    domains: [],
  },
  webpack: (config) => {
    // Garde ta config Webpack actuelle
    config.resolve.fallback = {
      fs: false,
      path: false,
      os: false,
    };
    return config;
  },
};

module.exports = nextConfig;
