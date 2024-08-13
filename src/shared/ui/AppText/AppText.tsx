import {classNames} from 'shared/lib/classNames/classNames';
import cls from './AppText.module.scss';
import { memo } from 'react';
import { TFunctionResult } from 'i18next';

export enum TextTheme {
  NORMAL = 'normal',
  ERROR = 'error'
}

export enum TextAlign {
    CENTER = 'center',
    RIGHT = 'right',
    LEFT = 'left',
}

interface AppTextProps {
 className?: string;
 title?: string;
 text?: string | TFunctionResult;
 theme?: TextTheme
 align?: TextAlign
}

export const AppText = memo((props: AppTextProps) => {
    const { className, text, align = TextAlign.LEFT, title, theme = TextTheme.NORMAL } = props;

    return (
        <div className={classNames(cls.AppText, {}, [className, cls[theme], cls[align]])} >
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
})