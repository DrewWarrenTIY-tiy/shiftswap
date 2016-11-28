module.exports = {
    entry: "./src/scripts/entry.js",
    output: {
      path: __dirname,
      filename: "./public/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js?/,
        include: SRC_DIR,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015"]
        }
      },
      {
       test: /\.json?/,
       include: SRC_DIR,
       loader: "json-loader"
      },
      {
        test: /\.css$/,
        loader: "style!css"
      },
      {
        test: /\.(jpe?g|png|gif|svg)(\?v=\d+\.\d+\.\d+)?$/i,
        loader: 'file-loader?name=[path][name].[ext]?[hash:10]',
         exclude: /(node_modules|bower_components)/
      }
    ]
    }
  };
