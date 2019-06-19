const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
  mode: "production",
  devServer: {
    compress: true
  },
  plugins: [
    new CopyPlugin([
      { from: 'src/images',
      to: 'images/' },
      { from: 'src/fonts',
      to: 'fonts/' }
    ]),
  ]
});
