const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  entry: path.join(__dirname, "./index.ts"),
  output: {
    path: path.join(__dirname, "lib"),
    filename: "index.js",
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
  plugins: [new CleanWebpackPlugin()],
};
