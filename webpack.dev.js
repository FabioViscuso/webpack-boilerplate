const { merge } = require("webpack-merge");
const path = require("path");
const HtmlWebackPlugin = require("html-webpack-plugin");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    mode: "development",
    output: {
        path: path.resolve(__dirname, "dist-dev"),
        filename: "[name][contenthash].js" /* Will refer 'bundle' as a name */,
        clean: true,
        assetModuleFilename: "[name][ext]",
    },
    devtool: "source-map",
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist"),
        },
        port: 5000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
            {
                test: /.(svg|png|jpg|jpeg|webp)$/i,
                type: "asset/resource",
            },
        ],
    },
    plugins: [
        new HtmlWebackPlugin({
            title: "Webpack demo",
            filename: "index.html",
            favicon: path.resolve(__dirname, "src/assets/favicon.png"),
            template: path.resolve(__dirname, "src/template.html"),
        }),
        /* new BundleAnalyzerPlugin(), */
    ],
});
