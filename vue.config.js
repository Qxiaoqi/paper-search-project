const path = require("path");
// 压缩js以及去除console.log
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  pluginOptions: {
    // 配置less全局变量
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, "src/global.less")]
    }
  },
  configureWebpack: config => {
    let plugins = [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            warnings: false,
            drop_console: true
          }
        }
      })
    ];

    if (process.env.NODE_ENV === "production") {
      // 为生产环境修改配置...
      config.plugins = [...config.plugins, ...plugins];
    } else {
      // 为开发环境修改配置...
    }
  }
};
