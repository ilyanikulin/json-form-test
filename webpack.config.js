module.exports = {
  output: {
    filename: "[name].[hash].js"
  },
  devServer: {
    overlay: false,
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  }
}
