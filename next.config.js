
const withNextIntl = require('next-intl/plugin')('./src/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.html$/,
      use: 'raw-loader',
    });

    // Add watchOptions to ignore the .genkit directory for all builds
    config.watchOptions = {
        ignored: ['**/.genkit/**'],
    };

    return config;
  },
};

module.exports = withNextIntl(nextConfig);
