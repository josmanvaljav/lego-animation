const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js"
    },
    resolve: {
        extensions: [".js"]
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                inject: true,
                template: "./public/index.html",
                filename: "./index.html"
            }
        )
        ,
        new copyWebpackPlugin({
            patterns: [
                {from: "./src/styles/style.css", to: ""},
                {from: "./src/images/spiderman.png", to: ""},
                {from: "./src/images/batman.png", to: ""},
                {from: "./src/images/flash.png", to: ""}
            ]
        })
    ]
}