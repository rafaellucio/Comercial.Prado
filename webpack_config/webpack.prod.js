const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');

const sourcePath = path.join(__dirname, '..', 'client');
const sourceDist = path.join(__dirname, '..', 'release');

const { NODE_ENV = 'development' } = process.env;

module.exports = {
  context: sourcePath,
  devtool: 'cheap-module-source-map',
  entry: [
    '../client/index.js',
  ],
  output: {
    filename: 'comercial-prado.[hash:8].js',
    path: sourceDist,
    publicPath: '/',
    sourceMapFilename: 'comercial-prado.[hash:8].map',
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
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
                modules: true,
                sourceMap: true,
              },
            },
          ],
        }),
      },
      {
        test: /\.(eot?.+|svg?.+|ttf?.+|otf?.+|woff?.+|woff2?.+)$/,
        use: 'file-loader?name=assets/[name].[hash:8].[ext]',
      },
      {
        test: /\.(jpg|jpeg|png|gif|ico|svg)$/,
        use: [
          'url-loader?limit=10240&name=assets/[name].[hash:8].[ext]',
        ],
        include: path.resolve(sourcePath, 'assets'),
      },
    ],
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.HashedModuleIdsPlugin(),
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
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
      },
      output: {
        comments: false,
      },
    }),
    new ExtractTextPlugin({
      filename: '[name].[contenthash:8].css',
      allChunks: true,
    }),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
      threshold: 10240,
    }),
    new PreloadWebpackPlugin({
      rel: 'preload',
      as: 'script',
      include: 'all',
      fileBlacklist: [/\.(css|map)$/],
    }),
  ],
};
