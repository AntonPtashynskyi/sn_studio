/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add trailing slash to all URLs
  trailingSlash: true,

  // Optimized webpack configuration
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
      config.resolve.fallback.tls = false;
      config.resolve.fallback.net = false;
      config.resolve.fallback.child_process = false;
    }

    return config;
  },

  // Optimize CSS
  // experimental: {
  //   optimizeCss: true, // Enable CSS optimization - requires 'critters' package
  // },

  // Compress output
  compress: true,

  // Enable SWC minification (faster than Terser)
  swcMinify: true,

  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Headers for caching and optimization
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|jpeg|png|gif|ico|webp|avif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
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

  // Enable React strict mode for better debugging
  reactStrictMode: true,

  // Production source maps (disable for smaller bundles)
  productionBrowserSourceMaps: false,

  // PoweredBy header removal for security
  poweredByHeader: false,
};

module.exports = nextConfig;
