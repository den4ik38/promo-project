import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { useState } from 'react';
import { AppButton, ButtonTheme } from 'shared/ui/AppButton/AppButton';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { useTranslation } from 'react-i18next';

interface SidebatProps {
 className?: string;
}

export const Sidebar = (props: SidebatProps) => {
    const { className } = props;
    const [collapsed, setCollapsed] = useState(false)
    const {t} = useTranslation()
    const toggleSidebaar = ()=>{
        setCollapsed(prev=>!prev)
    }
    return (
        <div data-testid="sidebar" className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])} >
            <AppButton data-testid="sidebar-toggle" onClick={toggleSidebaar} theme={ButtonTheme.OUTLINE}>{t('TOGGLE')}</AppButton>
            <div className={cls.switchers} >
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
}