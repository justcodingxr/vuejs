const path = require('path')

module.exports = {
  entry:'./src/main.js',
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        //css-loader只负责加载，不负责解析
        //style-css负责将样式添加到dom
        //使用多个loader从右向左
        //npm install --save-dev less-loader less
        //less将less转化为css
        use: [ 'style-loader','css-loader' ]
      },

      {
        test: /\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS
        }]
      },



      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8000,
              name:'img/[keying].[hash].[ext]'
            },

          }
        ]
      }

    ]
  }

}