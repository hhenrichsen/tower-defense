const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "production",
    entry: "./src/index.ts",
    resolve: {
        modulesDirectories: ['public/js', 'node_modules']
    },
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
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
    },
};
