const webpackMerge = require('webpack-merge');
const commun = require('./config/webpack.commun');
const devConfig = require('./config/webpack.dev');
const prodConfig = require('./config/webpack.prod');


module.exports = (env) => {
  const environments = {
    dev: devConfig,
    prod: prodConfig,
  };

  console.log('\n\n\n /**************************************************************\n *\n * Webpack Merge');
  console.log(' *\n **************************************************************/\n\n');
  console.log(webpackMerge(commun, environments[env.environment]));
  console.log('\n\n\n /**************************************************************\n *\n * Webpack Merge');
  console.log(' *\n **************************************************************/\n\n');

  return webpackMerge(commun, environments[env.environment]);
};
