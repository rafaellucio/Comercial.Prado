const env = process.env.NODE_ENV || 'dev';
module.exports = require(`./webpack_config/webpack.${env === 'production' ? 'prod' : 'dev' }.js`); // eslint-disable-line
