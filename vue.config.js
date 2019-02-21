const path = require("path");
// const GoogleFontsPlugin = require("google-fonts-webpack-plugin");

module.exports = {
  pluginOptions: {
    // 配置less全局变量
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, "src/global.less")]
    }
  },
  // plugins: [
  //   new GoogleFontsPlugin({
  //     fonts: [
  //       { family: "Source Sans Pro" }
  //       // { family: "Roboto", variants: [ "400", "700italic" ] }
  //     ]
  //   })
  // ]
};
