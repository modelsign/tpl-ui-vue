let config = require('./webpack.config.js');

config.entry = {
  'vue-undefined-component-name': './src/index.js'
};

config.output = {
  
  filename     : './dist/[name].js',
  library      : 'VueUndefinedComponentName',
  libraryTarget: 'umd'
};

module.exports = config;
