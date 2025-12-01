import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
