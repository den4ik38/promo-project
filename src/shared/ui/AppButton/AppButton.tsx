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
 disabled?: boolean
}

export const AppButton: FC<AppButtonProps> = (props) => {
    const { className, disabled, children, square, size = ButtonSize.M, theme, ...otherProps } = props;

    return (
        <button 
            disabled={disabled} 
            className={classNames(cls.AppButton, {[cls.square]: square, [cls.disabled]: disabled}, [className, cls[theme], cls[size]])} 
            {...otherProps}>
            {children}
        </button>
    );
}