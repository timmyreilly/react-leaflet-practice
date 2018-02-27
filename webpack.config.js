const webpack = require('webpack');
const path = require('path')

module.exports = {
    entry: {
        index: [path.join(__dirname, 'index.js')]
    },
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query:
            {
                presets:['es2015', 'react'],
                plugins: ['transform-class-properties'],
                env: {
                    development: {
                        presets: ['react-hmre'],
                    },
                },
            },
        }],
    },
    watchOptions: {
        poll: 1000,
    },
    devServer: {
        historyApiFallback: {
            index: '/',
        },
    },
};