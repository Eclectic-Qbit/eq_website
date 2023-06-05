/** @type {import('next').NextConfig} */
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

module.exports = nextConfig;
