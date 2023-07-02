/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.discordapp.com",
        port: "",
        pathname: "/avatars/**",
      },
    ],
  },
};

module.exports = nextConfig;
/*
module.exports = (phase, defaultConfig) => {
  return withBundleAnalyzer(defaultConfig);
};
*/

module.exports = {
  async rewrites() {
    return [
      {
        source: '/communities/:path*',
        destination: 'https://api.zealy.io/communities/:path*'
      }
    ]
  }
}