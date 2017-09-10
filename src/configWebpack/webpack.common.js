let webpack           = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    helpers           = require('./helpers'),
    configApp         = require('../../commonApp/configApp.js');


module.exports = {

    entry: {
        'polyfills': './polyfills.ts',
        'vendor': './vendor.ts',
        'app': './main.ts'
    },

    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file-loader?name=assets/[name].[hash].[ext]'
            },
            {
                test: /\.css$/,
                exclude: configApp.rootPath + '/src',
                loaders: ['to-string-loader', 'css-loader' ]
            },
            {
                test: /\.css$/,
                include: configApp.rootPath + '/src',
                loader: 'raw-loader'
            }
        ]
    },

    plugins: [
        
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,
            helpers.root('./src'), // location of your src
            {} // a map of your routes
        ),

        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),

        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]
};