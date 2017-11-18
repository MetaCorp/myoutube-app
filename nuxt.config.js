var tailwindcss = require('tailwindcss')
var autoprefixer = require('autoprefixer')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'MYoutube',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '~/css/main.css'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  modules: [
    '@nuxtjs/pwa'
  ],
  manifest: {
    name: 'MYoutube',
    lang: 'en',
    theme_color: '#3B8070'
  },
  modules: ['@nuxtjs/apollo'],
  apollo: {
    clientConfigs: {
      default: '~/apollo/client-configs/default.js'
    }
  },
  plugins: [
    '~plugins/filters.js'
  ],
  /*
  ** Build configuration
  */
  build: {
    postcss: [
      tailwindcss('./tailwindcss.config.js'),
      autoprefixer
    ],
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
