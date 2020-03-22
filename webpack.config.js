const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  devtool: 'source-map',
  optimization:{
    minimize: false
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/,
        query: {
          declaration: false,
        }
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
        }
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'react-component-lib',
    umdNamedDefine: true
  },
};