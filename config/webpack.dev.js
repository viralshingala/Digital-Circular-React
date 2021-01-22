const webpack = require("webpack");
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");
const commonConfig = require("./webpack.common");

module.exports = merge(commonConfig, {
  devtool: "cheap-module-eval-source-map",
  target: "web",
  mode: "development",

  output: {
    path: path.resolve(__dirname, "../client/public/"),
    filename: "[name].[hash:4].js"
  },

  devServer: {
    host: "localhost",
    port: 8080,
    open: true,
    hot: true
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebPackPlugin({
      // Create HTML file that includes references to bundled CSS and JS.
      template: "./client/src/index.html",
      minify: {
        removeComments: true,
        collapseWhitespace: true
      },
      inject: true
    })
  ],
  resolve: {
    alias: {


      Components: path.resolve(__dirname, '../client/src/components/'),
      Data: path.resolve(__dirname, '../client/src/data/'),
    },
  },
});

