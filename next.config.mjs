/** @type {import('next').NextConfig} */
const nextConfig = {
  // PRD: compile a self-contained standalone server artifact for PM2.
  output: 'standalone',
  // ESLint runs as a dedicated step (`npm run lint`); don't block builds on it
  // while the UI is being built out. Type-checking stays enabled.
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
