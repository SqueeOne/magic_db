module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.scryfall.io',
        port: '',
        pathname: '/normal/**',
      },
    ],
  },
}
