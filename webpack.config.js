const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/components/index.js",
    home: "./src/components/home/index.js",
    menu: "./src/components/menu/index.js",
    contact: "./src/components/contact/index.js",
  },
  devtool: "inline-source-map",
  mode: "development",
  devServer: {
    static: "./dist",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [new HtmlWebpackPlugin({ title: "dev" })],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      { test: /\.css$/i, use: ["style-loader", "css-loader"] },
    ],
  },
};
