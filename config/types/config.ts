export type buildMode = 'production' | 'development';

export interface buildPaths {
  entry: string,
  html: string,
  build: string,
  src: string
}

export interface buildEnv {
  mode: buildMode,
  port: number,
  api: string
}
export interface buildOptions {
  mode: buildMode,
  paths: buildPaths,
  isDev: boolean,
  port: number,
  api: string
  project: 'storybook' | 'frontend' | 'jest'
}