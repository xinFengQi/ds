var webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin'); //打包html的插件
const MiniCssEctractPlugin = require('mini-css-extract-plugin');
module.exports = {
  mode: 'development',
  entry: {
    'main': path.resolve('./main/index.js'),
    'scripts': path.resolve('./scripts/index.js'),
    'src': path.resolve('./src/index.js')
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssEctractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          MiniCssEctractPlugin.loader,
          'css-loader',
          'less-loader'
        ]
      }
    ]
  },
  //插件
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['dist/js/index'],
      filename: 'index.html',
      template: 'src/index.html'
    }),
    new MiniCssEctractPlugin({
      filename: '[name].css'
    })
  ],
  devServer: {
    contentBase: path.resolve('./dist'),//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
  }
}