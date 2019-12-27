const webpack = require("webpack");
const config = require("common/config");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react", ["@babel/env", { targets: { browsers: ["last 2 versions"] } }]],
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
    modules: ["./src/app", "./src/server", "node_modules"],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": config,
    }),
  ],
};
