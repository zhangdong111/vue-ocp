
var path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
 
  publicPath: process.env.NODE_ENV === 'test' ? './' : '/',
  
  outputDir: './dist',

  lintOnSave: false,

  parallel : true,

  configureWebpack: {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        'ASSETS': resolve('src/assets'),
        'VIEWS': resolve('src/views'),
        'IMAGES': resolve('src/assets/images'),
        '@': resolve('src'),
        'STORE': resolve('src/store'),
        'UTILS': path.resolve(__dirname, '../src/utils'),
        "PREDICT": resolve('src/views/predictPapers'),
        "TIPS": resolve('src/components/components')
      }
    }
  }
}