const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// const { HotModuleReplacementPlugin }  = require('webpack')

module.exports = {
  // mode:'development',
  mode: "production",
  entry: path.join(__dirname, "./index.ts"),
  output: {
    path: path.join(__dirname, "lib"),
    filename: "index.js",
  },
  resolve: {
    extensions: [".ts"],
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),

    // new HtmlWebpackPlugin({
    //   template: path.join(__dirname,'index.html'),
    //   filename: 'index.html'
    // }),

    // new HotModuleReplacementPlugin()
  ],

  // devServer: {
  //   port: 8080,
  //   open: true,
  //   hot: true,
  //   compress: true
  // }
};
