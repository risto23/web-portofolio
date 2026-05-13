import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Limit upload body size to 6 MB at framework level (validator enforces 5 MB)
  experimental: {
    serverActions: {
      bodySizeLimit: '6mb',
    },
  },
};

export default nextConfig;
