/** @type {import('next').NextConfig} */
const nextConfig = {
  // Do not fail the Vercel build on ESLint or TS errors
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
