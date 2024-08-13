import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { memo, useState } from 'react';
import { AppButton, ButtonSize, ButtonTheme } from 'shared/ui/AppButton/AppButton';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { SidebarItemsList } from 'widgets/Sidebar/model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SidebatProps {
 className?: string;
}

export const Sidebar = memo((props: SidebatProps) => {
    const { className } = props;
    const [collapsed, setCollapsed] = useState(false)
    const {t} = useTranslation()
    const toggleSidebaar = ()=>{
        setCollapsed(prev=>!prev)
    }
    return (
        <div data-testid="sidebar" className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])} >
            <div className={cls.items}>
                {SidebarItemsList.map((item)=>(
                    <SidebarItem collapsed={collapsed} item={item} key={item.path}/>
                ))}
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
})