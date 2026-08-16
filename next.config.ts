import type { NextConfig } from "next";

// Set STATIC_EXPORT=1 (see `npm run export`) to emit a fully static site to `out/`.
const staticExport = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  output: staticExport ? "export" : undefined,
  images: staticExport
    ? { unoptimized: true }
    : { formats: ["image/avif", "image/webp"] },
  // Allow the local browser-preview proxy to load dev/HMR resources.
  allowedDevOrigins: ["127.0.0.1", "localhost"],
};

export default nextConfig;
