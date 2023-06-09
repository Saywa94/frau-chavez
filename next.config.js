/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ['app', 'utils', 'components', 'lib'],
  },
}

module.exports = nextConfig
