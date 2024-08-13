import {classNames} from 'shared/lib/classNames/classNames';
import cls from './SidebarItem.module.scss';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { SidebaritemType } from 'widgets/Sidebar/model/items';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';

interface SidebarItemProps {
 collapsed?: boolean;
 item: SidebaritemType;
}

export const SidebarItem = memo((props: SidebarItemProps) => {
    const { collapsed = false, item } = props;
    const {t} = useTranslation();
    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null
    }
    return (
        <AppLink to={item.path} className={classNames(cls.item, {[cls.collapsed]: collapsed, [cls.jcc]: collapsed}, [])}>
            <item.icon className={cls.icon}/>
            <span className={cls.link}>
                {t(item.text)}
            </span>
        </AppLink>
    );
})