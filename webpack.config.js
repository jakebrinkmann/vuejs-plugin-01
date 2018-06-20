const webpack = require('webpack');
const path = require('path');

module.exports = { 
    // browser based implementation
    entry: path.resolve(__dirname + '/../src/index.js'),
    output: {
      path.resolve(__dirname, './dist/'),
      filename: 'vue-preview.min.js',
      // This module becomes accessible via window.VuePreview()
      libraryTarget: 'window',
      library: 'VuePreview'
    }
  }

