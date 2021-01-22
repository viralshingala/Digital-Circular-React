const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const AsyncChunkNames = require("webpack-async-chunk-names-plugin");
const chalk = require("chalk");
const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: {
    main: "./client/src/index.js"
  },

  resolve: {
    alias: {
      styles:        path.resolve(__dirname, "../client/src/styles/"),
     
      components:    path.resolve(__dirname, "../client/src/components"),
     
      utils:         path.resolve(__dirname, "../client/src/utils/"),
      data:          path.resolve(__dirname, "../client/src/data/"),
     
    }
  },

  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true
      })
    ],
    // runtimeChunk: {
    //   name: "manifest"
    // },
    // splitChunks: {
    //   cacheGroups: {
    //     default: false,
    //     vendor: {
    //       test: /[\\/]node_modules[\\/]((?!react|react-dom).*)[\\/]/,
    //       name: "vendors",
    //       chunks: "all",
    //       reuseExistingChunk: true
    //     },
    //     react: {
    //       test: /[\\/]node_modules[\\/]((react|react-dom).*)[\\/]/,
    //       name: "react",
    //       chunks: "all"
    //     }
    //   }
    // }
  },

  plugins: [
    new ProgressBarPlugin({
      format:
        chalk.green.bold("Building [:bar] ") +
        chalk.green.bold(":percent") +
        chalk.green.bold(" (:elapsed seconds)"),
      clear: false
    }),
    new AsyncChunkNames()
  ],
  module: {
    rules: [
      {
        test: /\.(jpg|png|gif|svg|pdf|ico)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader","sass-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  } // End of Module
};
