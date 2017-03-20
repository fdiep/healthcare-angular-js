var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './app/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }, {
                test: /\.html$/,
                loader: "html-loader"
            }, {
                test: /\.scss$/,
                loaders: ExtractTextPlugin.extract('css-loader!postcss-loader!sass-loader')
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: 'index.html'}),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    require('postcss-cssnext'),
                ]
            }
        }),
        new ExtractTextPlugin({filename: 'dist/styles/main.css', allChunks: true})
    ],
    devServer: {
        proxy: {
            '/api/**': {
                target: 'https://www.healthcare.gov/api',
                secure: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
};
