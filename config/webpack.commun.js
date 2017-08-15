const webpack = require('webpack');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

const paths = require('./paths');

const config = {
  entry: [
    require.resolve('./polyfills'),
    paths.appIndexJs,
  ],
  output: {
    filename: 'scripts.[hash:8].js',
    path: paths.appBuild,
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new webpack.NamedModulesPlugin(),
    new CaseSensitivePathsPlugin(),
  ],
};

module.exports = config;
