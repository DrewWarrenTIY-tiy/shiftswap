module.exports = {
    entry: "./src/scripts/entry.js",
    output: {
      path: __dirname,
      filename: "./public/bundle.js"
  },
  module: {
    loaders: [
        {
          test: /\.css$/,
          loader: "style!css"
        }
      ]
    }
  };
