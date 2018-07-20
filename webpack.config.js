module.exports = {

    entry: {
      homepage: './webpack/homepage.js',
      notfound: './webpack/notfound.js'
    },
    output: {
      filename: '[name].js',
      path: __dirname + "/assets/js/"
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules)/,
          use: [
            {
              loader: 'babel-loader',
              query: {
                presets: ['react', 'es2015'],
                plugins: ['transform-class-properties']
              }
            }
          ]
        }
      ]
    }
};
