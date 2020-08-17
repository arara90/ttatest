const HTMLWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: { index: ["babel-polyfill", "./frontend/index.js"] },
  output: {
    path: path.join(__dirname, "./dist"),
    publicPath: "/",
    filename: "[name].js",
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-react", ["@babel/preset-env", {}]],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./test.html",
      filename: "index.html",
    }),
    new CleanWebpackPlugin(),
  ],
};
