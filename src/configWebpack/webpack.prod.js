
let configApp           = require('../../config/appConfig.js'),
    webpack             = require('webpack'),
    webpackMerge        = require('webpack-merge'),
    ExtractTextPlugin   = require('extract-text-webpack-plugin'),
    commonConfig        = require('./webpack.common.js'),
    WebpackCleanupPlugin= require('webpack-cleanup-plugin');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(

    commonConfig, 
    
    {
        devtool: 'source-map',

        output: {
            path: configApp.rootPath + '/' + configApp.publicFolderName,
            filename: '[name].[hash].js',
            chunkFilename: '[id].[hash].chunk.js'
        },

        plugins: [
            
            new webpack.NoEmitOnErrorsPlugin(),
            
            new webpack.optimize.UglifyJsPlugin({ 
                mangle: {
                    keep_fnames: true
                }
            }),
            
            new ExtractTextPlugin('[name].[hash].css'),
            
            new webpack.DefinePlugin({
                'process.env': {
                    'ENV': JSON.stringify(ENV)
                }
            }),
            
            new webpack.LoaderOptionsPlugin({
                htmlLoader: {
                    minimize: false 
                }
            }),
            
            new WebpackCleanupPlugin() // clear build dir
        ]
    }
);