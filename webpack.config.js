const path = require('path');

module.exports = {
  entry: './visualization/visualization.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'visualization.js',
    path: path.resolve(__dirname, 'built')
  }
};