const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const sourcePath = path.join(__dirname, '..', 'client');
const sourceDist = path.join(__dirname, '..', 'release');

const { NODE_ENV = 'development' } = process.env;

module.exports = {
  context: sourcePath,
  devtool: 'source-map',
  entry: [
    '../client/index.js',
  ],
  output: {
    filename: 'comercial-prado-release.js',
    path: sourceDist,
    publicPath: '/',
    sourceMapFilename: 'comercial-prado-release.map',
  },
  devServer: {
    contentBase: sourcePath,
    publicPath: '/',
    historyApiFallback: true,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
        include: sourcePath,
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(eot?.+|svg?.+|ttf?.+|otf?.+|woff?.+|woff2?.+)$/,
        use: 'file-loader?name=assets/[name].[ext]',
      },
      {
        test: /\.(jpg|jpeg|png|gif|ico|svg)$/,
        use: [
          'url-loader?limit=10240&name=assets/[name].[ext]',
        ],
        include: path.resolve(sourcePath, 'assets'),
      },
    ],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(NODE_ENV),
      },
      NODE_ENV,
      __DEV__: NODE_ENV === 'development',
      __PROD__: NODE_ENV === 'production',
    }),
    new HtmlWebpackPlugin({
      template: path.join(sourcePath, 'index.html'),
      path: sourceDist,
      filename: 'index.html',
    }),
  ],
};
