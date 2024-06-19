import { RuleSetRule } from "webpack";
import { buildOptions } from "./types/config";
import { cssLoader } from "./loaders/cssLoadoer";

export function buildLoaders({isDev}: buildOptions): RuleSetRule[]{
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }
    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ['@babel/preset-env']
            }
        }
    }
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }
    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }
    const styleLoaders = cssLoader(isDev)
    return [
        svgLoader,
        fileLoader,
        styleLoaders,
        babelLoader,
        typescriptLoader,
    ]
}