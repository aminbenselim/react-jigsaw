var path = require("path");
var webpack = require("webpack");
var DashboardPlugin = require('webpack-dashboard/plugin');

//var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './js/app.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {
                 exclude: /(node_modules|bower_components)/,
                 test: /\.js$/,
                 loader: 'babel-loader',
                 query: {
                      presets: [
                         require.resolve('babel-preset-es2015'),
                         require.resolve('babel-preset-react'),
                               ]
                 }
             }
         ]
     },
     plugins: [
     new DashboardPlugin()
     ],
     watch: true,
    // plugins: [new HtmlWebpackPlugin()],
     stats: {
         colors: true
     },
     devServer: { inline: true },
     devtool: 'cheap-module-source-map'
 };