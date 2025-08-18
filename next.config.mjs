// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  // typescript: { ignoreBuildErrors: true }, // leave off unless you really need it
};
export default nextConfig;
