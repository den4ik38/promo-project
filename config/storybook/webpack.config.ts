import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import { buildPaths } from '../types/config';
import path from 'path';
import { cssLoader } from '../loaders/cssLoadoer';
export default ({config}: {config: webpack.Configuration}) =>{

    const paths: buildPaths = {
        entry: '',
        html: '',
        build: '',
        src: path.resolve(__dirname, '..', '..', 'src')
    }
    config.resolve?.modules?.push(paths.src)
    config.resolve?.extensions?.push('.ts', '.tsx')
    config.module?.rules?.push(cssLoader(true))
    //@ts-ignore
    config.module.rules = config.module.rules.map((rule: RuleSetRule)=>{
        if (/svg/.test(rule.test as string)) {
            return {...rule, exclude: /\.svg$/i}
        }
        return rule
    })
    config.module?.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    })
    config.plugins?.push(new DefinePlugin({
        __IS_DEV_: true
    }))
    return config;
}