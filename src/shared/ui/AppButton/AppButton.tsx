import {classNames, Mods} from 'shared/lib/classNames/classNames';
import cls from './AppButton.module.scss';
import { HTMLAttributes, memo, ReactNode } from 'react';

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  OUTLINE_RED = 'outline_red',
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
 disabled?: boolean;
 children: ReactNode;
}

export const AppButton = memo((props: AppButtonProps) => {
    const { className, disabled, children, square, size = ButtonSize.M, theme = ButtonTheme.OUTLINE, ...otherProps } = props;

    return (
        <button 
            disabled={disabled} 
            className={classNames(cls.AppButton, {[cls.square]: square, [cls.disabled]: disabled}, [className, cls[theme], cls[size]])} 
            {...otherProps}>
            {children}
        </button>
    );
})