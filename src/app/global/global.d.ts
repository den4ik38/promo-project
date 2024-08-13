declare module '*.scss' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare const __IS_DEV_: boolean
declare const __API_: string
declare const __PROJECT_: 'storybook' | 'frontend' | 'jest'

type DeepPartial<T> = T extends object ? {
  [P in keyof T]?: DeepPartial<T[P]>
}: T;