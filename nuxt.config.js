const config = require('./config');
const baseUrl = config.get('baseUrl');
const themeColor = config.get('themeColor');
const title = config.get('title');
const description = config.get('description');
const image = config.get('image');

module.exports = {
  head: {
    title: title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1,maximum-scale=5' },
      { hid: 'description', name: 'description', content: description },
      { hid: 'twitter:card', property: 'twitter:card', content: 'summary' },
      { hid: 'og:image', property: 'og:image', content: baseUrl + (config.get('og:image') || image) },
      { hid: 'og:title', property: 'og:title', content: config.get('og:title') || title },
      { hid: 'og:description', property: 'og:description', content: config.get('og:description') || description },
      { name: 'theme-color', content: themeColor },
      { name: 'apple-mobile-web-app-status-bar-style', content: config.get('apple:color') || themeColor },
      { name: 'apple-mobile-web-app-title', content: config.get('apple:title') || title },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'image_src', href: baseUrl + image },
    ],
  },
  loading: false,
  env: {
    baseUrl: baseUrl,
  },
  plugins: ['~plugins/head'],
  build: {
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  }
};
