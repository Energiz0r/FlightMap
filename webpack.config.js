/* eslint-disable */

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: ['./src/index.jsx'],
  mode: 'development',
  output: {
    path: path.join(__dirname, '/build'),
    filename: '[name].[contenthash].js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
};