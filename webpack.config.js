const path = require('path');
const HTMLWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    mode: "production",
    entry: {
        main: "./src/pages/index.js",

    },
    output: {
        path: path.resolve(__dirname, "dist")
    },
    module: {

        rules: [
            {
                test: /\.jsx?$/,

                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    },
                },
            },
            {
                test: /\.html?$/,
                use: ["html-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                type: "asset/resource",
                generator: {
                    filename: "images/[name].[hash][ext]"
                }
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf)$/,
                type: "asset/resource",
                generator: {
                    filename: "fonts/[name].[hash][ext]",
                },
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader, {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                        },
                    }, {
                        loader: "postcss-loader"
                    }
                ]
            }
        ]
    },
    plugins: [new HTMLWebpackPlugin({ template: "./src/index.html" }), new MiniCssExtractPlugin()]
}