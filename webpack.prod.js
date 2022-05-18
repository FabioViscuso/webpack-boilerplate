const { merge } = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name][contenthash].js" /* Will refer 'bundle' as a name */,
    clean: true,
    assetModuleFilename: "[name][ext]",
  },
});
