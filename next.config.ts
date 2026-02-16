import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Export static HTML/JS files for AWS
  images: {
    unoptimized: true  // Required for static export
  },
  reactStrictMode: true,
};

export default nextConfig;
