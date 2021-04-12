const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.ts",
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "babel-loader",
            },
        ],
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: "assets",
                    to: "assets",
                    globOptions: {
                        ignore: ["**/*.md"],
                    },
                },
                {
                    from: "html",
                    to: ".",
                    globOptions: {
                        ignore: ["**/*.md"],
                    },
                },
            ],
        }),
    ],
    resolve: {
        extensions: [".ts"],
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
};
