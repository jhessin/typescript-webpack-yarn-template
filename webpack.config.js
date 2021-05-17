/** @format */

const path = require('path');

const config = {
  entry: './ts/index.ts',
  mode: 'development',
  target: 'web',
  devtool: 'inline-source-map',
  devServer: {
    setup(app) {
      app.post('*', (req, res) => {
        res.redirect(req.originalUrl);
      });
    },
    contentBase: path.join(__dirname, '.'),
    compress: true,
    host: '0.0.0.0',
    watchContentBase: true,
    hot: true,
    injectHot: true,
    inline: true,
    port: 8080,
    overlay: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};

module.exports = config;
