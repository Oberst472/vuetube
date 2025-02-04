// vue.config.js
const path = require('path')

module.exports = {
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
  },
    publicPath: process.env.NODE_ENV === 'production'
        ? '/vuetube/'
        : '/'
}


function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/scss/vars.scss'),
        path.resolve(__dirname, './src/assets/scss/adaptive.scss')
      ]
    })
}
