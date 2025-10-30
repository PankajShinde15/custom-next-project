/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Required for static site generation
  basePath: '/custom-next-project', // Should match your repository name
  images: {
    unoptimized: true, // Required for static export
  },
}

module.exports = nextConfig