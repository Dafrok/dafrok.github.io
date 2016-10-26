const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const autoprefixer = require('autoprefixer')
const postcss = require('postcss')

module.exports = {
  context: __dirname + '/src',
  entry: './entry.js',
  output:{
    path: __dirname + '/dist',
    filename:'main.js'
  },
  module: {
    loaders:[
      {test: /\.js?$/, exclude: /node_modules/, loader: 'babel'},
      {test: /\.vue?$/, exclude: /node_modules/, loader: 'vue'}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Dafrok Scope',
      template: 'template/index.html'
    }),
    new webpack.LoaderOptionsPlugin({
      vue: {
        postcss: [autoprefixer]
      }
    })
  ]
}