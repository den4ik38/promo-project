export type buildMode = 'production' | 'development';

export interface buildPaths {
  entry: string,
  html: string,
  build: string
}

export interface buildEnv {
  mode: buildMode,
  port: number
}
export interface buildOptions {
  mode: buildMode,
  paths: buildPaths,
  isDev: boolean,
  port: number
}