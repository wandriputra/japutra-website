'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  WP_API: '"https://japutra.co.id/blog/wp-json/wp/v2"',
  CATEGORI_ID: '"6"'
  // WP_API: '"http://demo.wp-api.org/wp-json/wp/v2"'
})
