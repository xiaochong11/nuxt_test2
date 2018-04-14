module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
      '~/assets/css/main.css',
      'quill/dist/quill.snow.css',
      'quill/dist/quill.bubble.css',
      'quill/dist/quill.core.css'
  ],

  /*
  ** Add axios globally
  */
  plugins:[
      {src:'~/plugins/element-ui.js'},{src:'~/plugins/quill-editor.js',ssr: false }
  ],
  build: {
    vendor: ['axios','~/plugins/element-ui.js'],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          // loader: 'eslint-loader',
          exclude: /(node_modules)/
        },{
            test: /\.less$/,
            loader: "less-loader"
        })
      }
    }
  }
}
