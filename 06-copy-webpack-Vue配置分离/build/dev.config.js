const webpackmerge = require('webpack-merge')
const baseConfig =require('./base.config')

module.exports = webpackmerge.merge(baseConfig,{
  devServer:{
    contentBase:'./dist',
    inline:true
  }
})

