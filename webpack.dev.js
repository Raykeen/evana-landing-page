const common = require('./webpack.common.js');
const webpack = require('webpack');

const merge = require('webpack-merge');
const DashboardPlugin = require('webpack-dashboard/plugin');
const autoprefixer = require('autoprefixer');

module.exports = merge(common, {
    devtool: 'cheap-eval-source-map',

    devServer: {
        contentBase: 'dist/',
        open: true,
        publicPath: '/',
        hot: true,
        port: process.env.PORT || 3000,
        host: '0.0.0.0',
        useLocalIp: true,
        historyApiFallback: true,
        overlay: true
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new DashboardPlugin()
    ],

    module: {
        rules: [
            {
                test: /\.(s?css)$/,
                use: [
                    'style-loader',
                    'css-loader?sourceMap',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [ autoprefixer ],
                            sourceMap: true
                        }
                    },
                    'resolve-url-loader?sourceMap',
                    'sass-loader?sourceMap'
                ]
            }
        ]
    }
});
