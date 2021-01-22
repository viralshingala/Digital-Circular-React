const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

const merge = require("webpack-merge");

const commonConfig = require("./webpack.common");

module.exports = merge(commonConfig, {
  entry: './client/src/index.js',
  // devtool: "source-map",
  target: "web",
  mode: "production",

  output: {
    path: path.resolve(__dirname, "../client/public/"),
    filename: "[name].[chunkhash:4].js"
  },

  plugins: [
    new CleanWebpackPlugin({
      verbose: true
    }),
    new webpack.HashedModuleIdsPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: "disabled",
      generateStatsFile: true,
      statsOptions: {
        source: false
      }
    }),
    new HtmlWebPackPlugin({
      // Create HTML file that includes references to bundled CSS and JS.
      template: "./client/src/index.html",
      filename: "./index.html",
      minify: {
        removeComments: true,
        collapseWhitespace: false,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true
      },
      inject: true
    })
  ],

  module: {
    rules: [
      {
        test: /.jsx?$/, resolve: {
          extensions: [".js", ".jsx"]
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: false,
              removeComment: true,
              collapseWhitespace: false
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
 

      Components: path.resolve(__dirname, '../client/src/components/'),
      Data: path.resolve(__dirname, '../client/src/data/'),
 
    },
  }
});
