const webpack = require("webpack")
const { resolve } = require("path")
const config = require("./config")

module.exports = {
  context: __dirname,
  entry: resolve(__dirname, "../app/index.js"),
  output: {
    path: resolve(__dirname, "../app"),
    filename: "bundle.js",
    publicPath: "/"
  },
  resolve: config.resolve,
  devServer: {
    hot: true,
    contentBase: resolve(__dirname, "../app")
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        use: ["babel-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  },
  mode: "development",
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]
}
