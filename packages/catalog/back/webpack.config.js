const webpack = require("webpack");
const webpackNodeExternals = require("webpack-node-externals");
const path = require("path");
const config = require("common/config");

module.exports = {
  target: "node",
  entry: "./src/index.js",
  externals: [webpackNodeExternals()],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  resolve: {
    extensions: [".js"],
    modules: ["./src", "node_modules"],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": config,
    }),
  ],
};
