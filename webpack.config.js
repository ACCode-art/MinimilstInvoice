const path = require('path');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: './src',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};
