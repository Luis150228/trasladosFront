const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",

  output: {
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          sources: false,
          // attributes: false,
        },
      },
      {
        test: /\.css$/,
        // exclude: /singnin.css$/,
        use: ["style-loader", "css-loader"],
      },
      // {
      //   test: /singnin.css$/,
      //   use: [MiniCssExtractPlugin.loader, "css-loader"],
      // },
      {
        test: /\.(png|jpe?g|jpg|gif|svg)$/i,
        loader: "file-loader",
        // options: {
        // 	name: '[path][name].[ext]',
        // },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "App Zero Dev",
      //filename: 'index.html',
      template: "./src/index.html",
    }),
    new HtmlWebpackPlugin({
      title: "App Zero Dev",
      filename: "app.html",
      template: "./src/app.html",
    }),
    // new MiniCssExtractPlugin({
    //   filename: "[name].[fullhash].css",
    //   ignoreOrder: false,
    // }),
    new CopyPlugin({
      patterns: [{ from: "src/assets/", to: "assets/" }],
    }),
    new CopyPlugin({
      patterns: [{ from: "src/js/", to: "js/" }],
    }),
  ],
};
