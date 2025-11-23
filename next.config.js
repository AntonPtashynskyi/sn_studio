/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
      config.resolve.fallback.tls = false;
      config.resolve.fallback.net = false;
      config.resolve.fallback.child_process = false;
    }

    return config;
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '/api/:path*',
        locale: false,
      },
      {
        source: '/sitemap.xml',
        destination: '/sitemap.xml',
        locale: false,
      },
      {
        source: '/robots.txt',
        destination: '/robots.txt',
        locale: false,
      },
    ];
  },

  env: {
    GOOGLE_SERVICE_PRIVATE_KEY: process.env.GOOGLE_SERVICE_PRIVATE_KEY,
  },

  output: "standalone",
};

module.exports = nextConfig;
