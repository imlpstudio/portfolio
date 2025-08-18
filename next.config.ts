// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // ✅ do not fail the build on ESLint errors (Vercel/CI only)
    ignoreDuringBuilds: true,
  },
  // If you ever want to also skip TS type errors in CI, flip this on:
  // typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
