/** @type {import('next').NextConfig} **/

const nextConfig = {
  images: {
    domains: ['localhost', 'res.cloudinary.com'],

    unoptimized: true,
  },
  reactStrictMode: false,

  webpack(config, { isServer }) {
    const prefix = config.assetPrefix ?? config.basePath ?? ''
    config.module.rules.push({
      test: /\.mp4$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: `${prefix}/_next/static/media/`,
            outputPath: `${isServer ? '../' : ''}static/media/`,
            name: '[name].[hash].[ext]',
          },
        },
      ],
    })

    return config
  },
}
module.exports = nextConfig
