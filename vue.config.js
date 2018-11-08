const path = require("path");

module.exports = {
  pluginOptions: {
    // 配置less全局变量
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, "src/global.less")]
    }
  }
};
