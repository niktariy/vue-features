const path = require('path');

function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        // eslint-disable-next-line no-undef
        path.resolve(__dirname, './src/assets/styles/_utils.sass'),
      ],
    });
}

module.exports = {
  chainWebpack: (config) => {
    const types = ['vue-modules', 'vue'];
    types.forEach(type => addStyleResource(config.module.rule('sass').oneOf(type)));
  },
};
