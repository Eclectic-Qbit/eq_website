/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const nextConfig = false
  ? {
      experimental: {
        appDir: true,
      },
      output: "export",
      images: {
        unoptimized: true,
      },
    }
  : {
      experimental: {
        appDir: true,
      },
    };

module.exports = (phase, defaultConfig) => {
  return withBundleAnalyzer(defaultConfig);
};
