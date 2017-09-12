let webpack           = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    helpers           = require('./helpers'),
    configApp         = require('../../commonApp/configApp.js');

console.log(process.env.NODE_ENV, process.env.ENV)
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
                exclude: configApp.rootPath + '/src',
                loader: ['to-string-loader', 'css-loader' ]
            },
            {
                test: /\.css$/,
                include: configApp.rootPath + '/src',
                loader: 'raw-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loaders: ['raw-loader', 'sass-loader']
            }
            // {
            //     test: /\.scss$/,
            //     use: [
            //         {
            //             loader: "style-loader",                 // creates style nodes from JS strings
            //         }, 
            //         {
            //             loader: "css-loader",               // translates CSS into CommonJS
            //             options: { sourceMap: true }
            //         }, 
            //         {
            //             loader: "sass-loader",              // compiles Sass to CSS
            //             options: { sourceMap: true }
            //         }
            //     ]
            // }
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