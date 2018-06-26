module.exports = {
    env: {
        'mode': process.env.NODE_ENV
    },
  /*
  ** Headers of the page
  */
  head: {
      title: '直播客|打造直播乐园',
      meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { hid: 'keywords', name: 'keywords', content: '推荐主播，主播精选，好玩的直播间推荐，直播新闻，直播界能量，好玩的弹幕墙，赛事直播，王者荣耀数据，王者荣耀巅峰赛数据' },
          { hid: 'description', name: 'description', content: '直播客为你推荐优质主播，汇集直播界能量，提供直播新闻、好玩的弹幕墙、赛事直播、王者荣耀实时数据、王者荣耀巅峰赛数据' }
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
      // {src:'~/plugins/axios.js',ssr: true},
      {src:'~/plugins/element-ui.js'},
      {src:'~/plugins/quill-editor.js',ssr: false },
      {src:'~/plugins/vue-socketio.js',ssr: false},
      {src:'~/plugins/barrage.js',ssr: false},
      {src:'~/plugins/date-format.js',ssr: true}
  ],
  build: {
    vendor: ['axios','~/plugins/element-ui.js','~/plugins/quill-editor.js','~/plugins/vue-socketio.js','~/plugins/barrage.js'],
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
