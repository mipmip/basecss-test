const postcss = require('postcss');
const postcssCustomProperties = require('postcss-custom-properties');

postcss([
  postcssCustomProperties({
    preserve: false
  });
])
