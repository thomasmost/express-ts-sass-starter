var webpack = require('webpack');
var path = require('path');
var LiveReloadPlugin = require('webpack-livereload-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['', '.scss', '.ts', '.js']
  },

  plugins: [
    new ExtractTextPlugin('app.css'),
    new HtmlWebpackPlugin({
      title: 'Thomas Constantine Moore',
      inject: 'body',
      hash: true,
      template: 'src/index.html'
    }),
    new LiveReloadPlugin(),
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development, 
      // ./public directory is being served 
      host: 'localhost',
      port: 4000,
      server: { baseDir: ['public'] }
    })
  ],

  entry: ['./src/client/app.ts'],
  output: {
    path: __dirname + "/public/",
    publicPath: '/',
    filename: "bundle.js"
  },

  devtool: 'source-map',

  module: {
    loaders: [
      { test: /\.jpg$/,    loader: "url-loader?limit=10000&minetype=image/jpg" },
      {
       test: /\.js$/,
       exclude: /node_modules/,
       loader: 'babel-loader'
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      },
      {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract(
              'style-loader', // The backup style loader
              'css-loader?sourceMap!sass-loader?sourceMap'
          )
      },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file?name=fonts/[name].[ext]'
            }
    ],
    sassLoader: {
      includePaths: ["./src/client/sass/"]
    }
  },

  devServer: {
    historyApiFallback: true,
    hot: true
  }
};