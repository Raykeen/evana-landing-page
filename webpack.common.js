const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        './client/js/app.js',
        './client/scss/main.scss',
        './client/template/index.pug'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'client/template/index.pug'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default'],
            Util: 'exports-loader?Util!bootstrap/js/dist/util'
        })
    ],
    module: {
        rules: [
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.(pug|jade)$/,
                use: ['html-loader', 'pug-html-loader']
            },
            {
                test: /\.(woff2?|ttf|eot|svg)(\?[\s\S]+)?$/,
                include: [/font/],
                use: 'file-loader?name=fonts/[name].[ext]',
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                exclude: [/font/],
                use: 'file-loader?name=images/[name].[ext]'
            }
        ]
    }
};
