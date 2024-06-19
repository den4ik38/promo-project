import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from "webpack";
import { buildOptions } from "./types/config";
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';

export function buildPlugins(options: buildOptions): webpack.WebpackPluginInstance[] {
    return [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: options.paths.html
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash].css",
            chunkFilename: "css/[name].[contenthash].css",
        }),
        new webpack.DefinePlugin({
            __IS_DEV_: JSON.stringify(options.isDev)
        }),
        new BundleAnalyzerPlugin({
            openAnalyzer: false
        })
    ]
}