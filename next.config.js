/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '/custom-next-project',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '/custom-next-project',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // This is needed for GitHub Pages
  reactStrictMode: true,
}

module.exports = nextConfig