var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
// var helpers = require('./helpers');

let path = require('path');
let configApp = require('../../commonApp/configApp.js');

module.exports = webpackMerge(

    commonConfig, 

    {
        devtool: 'cheap-module-eval-source-map',

        output: {
            path: configApp.rootPath + '/' + configApp.publicFolderName,
            filename: '[name].js',
            chunkFilename: '[id].chunk.js'
        },

        plugins: [
        new ExtractTextPlugin('[name].css')
        ],

        devServer: {
            historyApiFallback: true,
            stats: 'minimal',
            port: configApp.portDevelopment
        }
    }
    );