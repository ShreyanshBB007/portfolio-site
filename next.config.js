 
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed output: 'export' to allow Vercel to generate required manifests (routes-manifest.json)
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
}

module.exports = nextConfig