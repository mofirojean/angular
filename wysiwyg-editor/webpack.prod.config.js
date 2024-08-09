const baseConfig = require("./webpack.config");
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { mode } = require("./webpack.dev.config");

module.exports = {
  ...baseConfig,
  mode: 'production',
  output: {
    path: path.join(process.cwd(), "dist", "wysiwyg-editor"),
    filename: "main.js",
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          context: path.join(process.cwd(), "src", "electron"),
          from: "package.json",
        },
      ],
    }),
  ],
};
