import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { useState } from 'react';
import { AppButton, ButtonSize, ButtonTheme } from 'shared/ui/AppButton/AppButton';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import AboutSvg from 'shared/assets/about-svg.svg';
import MainSvg from 'shared/assets/main-svg.svg';
import { RoutePath } from 'shared/config/router/routeConfig';

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
            <div className={cls.items}>
                <AppLink to={RoutePath.main} className={cls.item}><MainSvg className={cls.icon}/>
                    <span className={cls.link}>
                        {t('main')}
                    </span>
                </AppLink>
                <AppLink className={cls.item} to={RoutePath.about}><AboutSvg className={cls.icon}/>
                    <span className={cls.link}>
                        {t('about')}
                    </span>
                </AppLink>
            </div>
            <AppButton data-testid="sidebar-toggle" 
                className={cls.toggleBtn} 
                onClick={toggleSidebaar}
                size={ButtonSize.L} 
                square
                theme={ButtonTheme.BACKGROUND_INVERTED}>
                {collapsed ? '>' : '<'}
            </AppButton>
            <div className={cls.switchers} >
                <ThemeSwitcher />
                <LangSwitcher short={collapsed}/>
            </div>
        </div>
    );
}