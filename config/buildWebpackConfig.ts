import webpack from "webpack";
import { buildOptions } from "./types/config";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildPlugins } from "./buildPlugins";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(options: buildOptions): webpack.Configuration{
    return {
        mode: options.mode,
        entry: options.paths.entry,
        devtool: options.isDev ? 'inline-source-map' : undefined,
        devServer: options.isDev ? buildDevServer(options) : undefined,
        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolvers(options),
        output: {
            filename: '[name].[contenthash].js',
            path: options.paths.build,
            clean: true
        },
        plugins: buildPlugins(options),
    };
}