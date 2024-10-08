import webpack from "webpack";
import { buildWebpackConfig } from "./config/buildWebpackConfig";
import { buildEnv, buildPaths } from "./config/types/config";
import path from "path";

export default (env: buildEnv) => {

    const paths: buildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src')
    }
  
    const mode = env.mode || 'development'
    const PORT = env.port || 3000
    const isDev = mode === 'development'
    const API = mode === 'development' ? 'http://localhost:8000' : 'http://production.ru'
    const config: webpack.Configuration  = buildWebpackConfig({
        mode,
        paths, 
        isDev,
        port: PORT,
        api: API,
        project: 'frontend'
    });

    return config
};