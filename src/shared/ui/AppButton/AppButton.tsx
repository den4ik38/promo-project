import {classNames} from 'shared/lib/classNames/classNames';
import cls from './AppButton.module.scss';
import { FC, HTMLAttributes } from 'react';

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline'
}

interface AppButtonProps extends HTMLAttributes<HTMLButtonElement> {
 className?: string;
 theme?: ButtonTheme;
}

export const AppButton: FC<AppButtonProps> = (props) => {
    const { className, children, theme, ...otherProps } = props;

    return (
        <button className={classNames(cls.AppButton, {}, [className, cls[theme]])} {...otherProps}>
            {children}
        </button>
    );
}