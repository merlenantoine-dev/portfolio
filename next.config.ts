import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable Turbopack and force Webpack
  turbopack: false,

  images: {
    domains: [],
  },

  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      path: false,
      os: false,
    };
    return config;
  },
};

export default nextConfig;
