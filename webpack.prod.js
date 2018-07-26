const merge = require("webpack-merge");
const common = require("./webpack.config.js");

module.exports = merge(common, {
  optimization: {
    nodeEnv: "production",
    minimize: true,
    removeAvailableModules: true,
    removeEmptyChunks: true, 
    mergeDuplicateChunks: true,
  }
});
