const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: "../server/index.js",

  target: "node",

  externals: [nodeExternals()],

  output: {
    path: path.resolve(__dirname, "../client/public/"),
    filename: "[name].[chunkhash:4].js"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader"
      }
    ]
  }
};
