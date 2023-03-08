/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    ALCHEMY_API_KEY: process.env.ALCHEMY_API_KEY,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
