// eslint-disable-next-line no-undef
const isProd = process.env.NODE_ENV === 'production'

// eslint-disable-next-line no-undef
module.exports = {
  reactStrictMode: true,
  assetPrefix: isProd ? 'https://cdn.statically.io/gh/ethanbonin/ethanbonin.github.io/gh-pages/' : '',
}
