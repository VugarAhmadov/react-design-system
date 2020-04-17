const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  mode: 'production',
  entry: './src/index.tsx',
  devtool: 'source-map',
  optimization:{
    minimize: false
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/,
        query: {
          declaration: true,
        }
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      },
      {
        test: /\.(less)$/,
        use: [
            MiniCssExtractPlugin.loader,
            {
                loader: "css-loader"
            },
            {
                loader: "less-loader",
                options: {
                    plugins: []
                }
            }

        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ],
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
      umd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
      umd: 'react-dom',
    },
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.less' ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'kris-cpt-lib.js',
    libraryTarget: 'umd',
    library: 'kris-cpt-lib'
  },
};