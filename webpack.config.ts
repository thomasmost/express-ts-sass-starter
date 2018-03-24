var webpack = require("webpack");
var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var BrowserSyncPlugin = require("browser-sync-webpack-plugin");

var ProgressBarPlugin = require("progress-bar-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");

var bourbon = require("bourbon").includePaths;
var neat = require("bourbon-neat").includePaths;
var stylepaths = bourbon.concat(neat);


const atl = require("awesome-typescript-loader");

const extractSass = new ExtractTextPlugin({filename: "app.css"});

module.exports = {
  resolve: {
    alias: {
      moment: "moment/moment.js",
    },
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".d.ts", ".tsx", ".js", ".json", ".jpg", ".svg", ".scss", ".ttf"]
  },
  mode: "development",
  plugins: [
    new ProgressBarPlugin(),
    extractSass,
    new HtmlWebpackPlugin({
      title: "Thomas Constantine Moore",
      inject: "body",
      hash: true,
      template: "src/index.html"
    }),
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development, 
      // ./public directory is being served 
      host: "localhost",
      port: 5000,
      server: { baseDir: ["public"] }
    }),
    new CopyWebpackPlugin([
       { from: "src/static" }
    ]),
  ],
  entry: ["./src/client/app.ts"],
  output: {
    path: __dirname + "/public/",
    filename: "bundle.js"
  },
  devtool: "source-map",

  module: {
    rules: [
      {
         test: /\.(ts|tsx)?$/, 						  // All ts and tsx files will be process by
         loaders: [ "awesome-typescript-loader" ],
         exclude: /node_modules/                   // ignore node_modules
      },
      { test: /\.jpg$/,    loader: "url-loader?limit=10000&minetype=image/jpg" },
      {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract({
            use: [{
                loader: "css-loader"
            }, {
                loader: "sass-loader",
                options: {
                    includePaths: stylepaths
                }
            }]
          })
      },
      {
          test: /\.(eot|ttf|woff|woff2)$/,
          loader: "file-loader?name=fonts/[name].[ext]"
      },
      {
        test: /\.svg$/,
        loader: "svg-as-symbol-loader?tag=svg"
      },
    ]
  },

  devServer: {
    historyApiFallback: true,
    hot: true
  }
};