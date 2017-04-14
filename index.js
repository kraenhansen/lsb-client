const sdc = require('sdc-client');

const DEFAULT_CONFIG = {
  bankRegistrationNumber: '0400',
  userAgent: 'Lån & Spar client (https://github.com/kraenhansen/lsb-client)'
};

module.exports = config => {
  // Merge the config over the default config
  const mergedConfig = Object.assign({}, DEFAULT_CONFIG, config);
  // Return a sdc client based on the merged configuration
  return sdc(mergedConfig);
};
