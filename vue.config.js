const config = require('./tasks/config');
const autoprefixer = require('autoprefixer');

module.exports = {
  postcss: [
    autoprefixer({ browsers: config.autoPrefixerBrowsers }),
  ],
};
