const common = require('./webpack.common.js');
const webpack = require('webpack');
const merge = require('webpack-merge');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = merge(common, {
    plugins: [
        new CleanWebpackPlugin('dist'),
        new ExtractTextPlugin('styles.css'),
        new UglifyJSPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ],

    module: {
        rules: [
            {
                test: /\.(s?css)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: { plugins: () => [ autoprefixer ] }
                        },
                        'resolve-url-loader',
                        'sass-loader?sourceMap' // sourcemaps are needed for resolve-url-loader
                    ]
                })
            }
        ]
    }
});
