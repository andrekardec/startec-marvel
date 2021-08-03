const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: path.resolve(__dirname, "./src/presentation", "index.tsx"),
    output: {
      path: path.join(__dirname, "build"),
      publicPath: "/",
      filename: "index.bundle.js"
    },
    mode: process.env.NODE_ENV || "development",
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    devServer: { contentBase: path.join(__dirname, "src") },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
              test: /\.svg$/,
              use: ['@svgr/webpack'],
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ["ts-loader"],
            },
            {
                test: /\.(css|scss)$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                use: ["file-loader"],
            },
        ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx'],
      alias: {
        "@adapters": path.resolve(__dirname, "./src/adapters/"),
        "@config": path.resolve(__dirname, "./src/config/"),
        "@domain": path.resolve(__dirname, "./src/domain/"),
        "@presentation": path.resolve(__dirname, "./src/presentation/"),
      }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src/presentation/public", "index.html"),
            favicon: "src/presentation/public/favicon.ico"
        }),
        new CleanWebpackPlugin(),
        new Dotenv()
    ],
    devServer: {
      contentBase: path.join(__dirname, './src/'),
      port: 3000,
      historyApiFallback: true,
  },
};