const path = require('path');
const slsw = require('serverless-webpack');

module.exports = {
  devtool: 'source-map',
  mode: 'production',
  entry: slsw.lib.entries,
  resolve: {
    symlinks: false,
    extensions: ['.js', '.jsx', '.json', '.ts'],
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  externals: ['aws-sdk'],
  target: 'node',
  module: {
    rules: [
      { 
        test: /\.ts(x?)$/, 
        include: path.resolve(__dirname, 'src'), 
        loader: 'ts-loader'
      }
    ]
  },
};