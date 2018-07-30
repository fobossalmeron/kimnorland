module.exports = {
  mode: "development",
  entry: {
    homepage: "./webpack/homepage.js",
    notfound: "./webpack/notfound.js"
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/assets/js/"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            query: {
              presets: ["env", "react"],
              plugins: ["transform-class-properties"]
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        loaders: [ 'babel-loader',
          {
            loader: 'react-svg-loader',
            query: {
              svgo: {
                plugins: [{cleanupIDs: false}],
                floatPrecision: 2
              }
            }
          }
        ]
      }
    ]
  }
};
