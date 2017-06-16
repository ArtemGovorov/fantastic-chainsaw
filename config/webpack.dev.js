var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');
var bootstrapEntryPoints = require('./webpack.bootstrap.config');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  entry: {
    'bootstrap': bootstrapEntryPoints.dev
  },

  output: {
    path: helpers.root('dist'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new ExtractTextPlugin('[name].css'),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
});
