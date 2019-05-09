module.exports = {
  plugins: {
    autoprefixer: {}
  },
  test: /\.(ttf|otf|eot|woff|woff2)$/,
    use: {
      loader: "file-loader",
      options: {
        name: "fonts/[name].[ext]",
      },
    },
  
}
