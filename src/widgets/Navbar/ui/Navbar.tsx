/* eslint-disable max-len */
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { AppButton, ButtonTheme } from 'shared/ui/AppButton/AppButton';
import { useCallback, useState } from 'react';
import { AuthModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, UserActions } from 'entities/User';


interface NavbarProps {
 className?: string;
}

export const Navbar = (props: NavbarProps) => {
    const { className } = props;
    const {t} = useTranslation()
    const user = useSelector(getUserAuthData)
    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch()
    const onOpebModal = useCallback(() => {
        setIsOpen(true)
    }, [])
    const onCloseModal = useCallback(() => {
        setIsOpen(false)
    }, [])
    const onLogout = useCallback(() => {
        dispatch(UserActions.logout())
    }, [dispatch])
    if (user) {
        return (
            <div className={classNames(cls.Navbar, {}, [className])} >
                <div className={cls.links}>
                    <AppButton onClick={onLogout} theme={ButtonTheme.CLEAR}>{t('LogOut')}</AppButton>
                </div>
            </div>
        )
    }
    return (
        <div className={classNames(cls.Navbar, {}, [className])} >
            <div className={cls.links}>
                <AppButton onClick={onOpebModal} theme={ButtonTheme.CLEAR}>{t('LogIn')}</AppButton>
            </div>
            {isOpen && <AuthModal isOpen={isOpen} onClose={onCloseModal} />}
        </div>
    );
}