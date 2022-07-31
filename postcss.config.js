/* eslint-disable global-require */

const PrefixWrap = require('postcss-prefixwrap');

module.exports = {
  syntax: 'postcss-scss',
  plugins: [
    require('tailwindcss')('./tailwind.config.js'),
    require('autoprefixer'),
    require('cssnano'),
    require('autoprefixer'),
    PrefixWrap('.new-blocks-wrap'),
  ],
};
