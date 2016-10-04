module.exports = {
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    path: './dist/public',
    filename: 'bundle.js'
  },

  devServer: {
    port: 3001,
    contentBase: './dist/public',
    inline: true,
    proxy: [{
      path: '/api',
      target: 'http://localhost:3000'
    }]
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}
