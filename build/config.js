const { resolve } = require('path')
module.exports = {
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      remini: resolve(__dirname, "../src/index.js"),
    }
  }
}