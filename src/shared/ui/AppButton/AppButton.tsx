import {classNames} from 'shared/lib/classNames/classNames';
import cls from './AppButton.module.scss';
import { FC, HTMLAttributes } from 'react';

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'background_inverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl'
}
interface AppButtonProps extends HTMLAttributes<HTMLButtonElement> {
 className?: string;
 theme?: ButtonTheme;
 size?: ButtonSize
 square?: boolean
}

export const AppButton: FC<AppButtonProps> = (props) => {
    const { className, children, square, size = ButtonSize.M, theme, ...otherProps } = props;

    return (
        <button className={classNames(cls.AppButton, {[cls.square]: square}, [className, cls[theme], cls[size]])} {...otherProps}>
            {children}
        </button>
    );
}