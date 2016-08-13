/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  app.import('vendor/fontello/css/minder.css');
  app.import('vendor/fontello/css/minder-codes.css');
  app.import('vendor/fontello/css/minder-embedded.css');

  app.import('vendor/fontello/font/minder.ttf', {
    destDir: 'assets/font'
  });
  app.import('vendor/fontello/font/minder.eot', {
    destDir: 'assets/font'
  });
  app.import('vendor/fontello/font/minder.svg', {
    destDir: 'assets/font'
  });
  app.import('vendor/fontello/font/minder.woff', {
    destDir: 'assets/font'
  });
  app.import('vendor/fontello/font/minder.woff2', {
    destDir: 'assets/font'
  });

  app.import('vendor/tachyons.min.css');

  return app.toTree();
};
