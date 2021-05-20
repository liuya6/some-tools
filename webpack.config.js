const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  mode:'production',
  entry: path.join(__dirname,'./main.ts'),
  output: {
    path: path.join(__dirname,'dist'),
    filename: "main.[contenthash:8].js"
  },
  resolve: {
    extensions: [".ts"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}


