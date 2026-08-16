import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Allow the local browser-preview proxy to load dev/HMR resources.
  allowedDevOrigins: ["127.0.0.1", "localhost"],
};

export default nextConfig;
