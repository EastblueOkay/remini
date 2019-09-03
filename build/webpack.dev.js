const webpack = require("webpack")
const { resolve } = require("path")
const UglifyJSPlugin = require("uglifyjs-webpack-plugin")

module.exports = {
  context: __dirname,
  entry: resolve(__dirname, "../app/index.js"),
  output: {
    path: resolve(__dirname, "../app"),
    filename: "bundle.js",
    publicPath: "/"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      remini: resolve(__dirname, "../src/index.js")
    }
  },
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
  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        cache: true,
        parallel: true
      })
    ]
  },
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
