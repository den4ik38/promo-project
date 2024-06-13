import type { Configuration as ConfigurationDevServer } from 'webpack-dev-server'
import { buildOptions } from './types/config'
export function buildDevServer(options: buildOptions): ConfigurationDevServer{
    return {
      port: options.port,
      open: true,
      historyApiFallback: true,
    }
}