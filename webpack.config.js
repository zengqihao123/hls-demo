const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const compilePath = '/sample/';

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: {
    'index': ['./scripts/index.js']
  },
  output: {
    path: __dirname + compilePath,
    filename: 'scripts/[name].js',
    globalObject: 'this'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: 'pre',
        loader: 'eslint-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(sass|scss|css)$/,
        use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                url: false,
                sourceMap: true,
                minimize: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                includePaths: [__dirname + '/node_modules/']
              }
            }
          ]
        }))
      },
      {
        test: /\.pug$/,
        loaders: [ 'pug-loader' ]
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.css', '.scss', '.sass']
  },
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 4000,
      server: { baseDir: [__dirname + compilePath] }
    }),
    new ExtractTextPlugin('styles/main.css', { allChunks: true }),
    new StyleLintPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: './index.pug',
      path: '../',
      filename: 'index.html'
    })
  ]
};
