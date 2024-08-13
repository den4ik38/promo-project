import {classNames} from 'shared/lib/classNames/classNames';
import DarkIcon from 'shared/assets/theme-dark.svg'
import LightIcon from 'shared/assets/theme-light.svg'
import { AppButton, ButtonTheme } from 'shared/ui/AppButton/AppButton';
import { Theme, UseTheme } from 'app/providers/theme';
import { memo } from 'react';

interface ThemeSwitcherProps {
 className?: string;
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
    const { className } = props;
    const {theme, toggleTheme} = UseTheme();

    return (
        <AppButton className={classNames('', {}, [className])} onClick={toggleTheme} theme={ButtonTheme.CLEAR}>
            {theme === Theme.DARK ? <LightIcon /> : <DarkIcon />}
        </AppButton>
    );
})