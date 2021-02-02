const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require(`dotenv`);

module.exports = {
    entry: `./src/index.js`,
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        hot: true,
        historyApiFallback: true,
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.(m?js|ts)$/,
                exclude: /(node_modules)/,
                use:  [`babel-loader`]
            }
        ]
    },
    optimization: {
        minimizer: [
          new HtmlWebpackPlugin({
              minify: true,
              template: path.join(__dirname, `src`, `template.html`)
          })
        ],
    },
    resolve: {
        extensions: [`.js`],
    }
}