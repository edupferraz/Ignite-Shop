/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  setMinify: true,

  images: {
    domains: [
      'files.stripe.com'
    ]
  },

  experimental: {
    images: {
      allowFutureImage: true
    }
  }
}

module.exports = nextConfig
