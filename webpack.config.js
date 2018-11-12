const GoogleFontsPlugin = require('@beyonk/google-fonts-webpack-plugin')
const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: [
    '@babel/polyfill', // enables async-await
    './client/index.js'
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [{loader: 'style-loader'}, {loader: 'css-loader'}]
      }
    ]
  }
  // plugins: [
  //   new GoogleFontsPlugin({
  //     fonts: [
  //       {family: 'Source Sans Pro'},
  //       {
  //         family: 'Muli',
  //         variants: ['200', '200i', '300', '300i', '400', '400i', '600', '700']
  //       }
  //     ],
  //     path: undefined,
  //     filename: './public/fonts.css'
  //   })
  // ]
}
