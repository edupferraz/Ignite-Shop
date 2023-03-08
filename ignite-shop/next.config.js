/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  setMinify: true,

  experimental: {
    images: {
      allowFutureImage: true
    }
  }
}

module.exports = nextConfig
