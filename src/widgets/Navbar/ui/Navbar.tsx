/* eslint-disable max-len */
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { AppButton, ButtonTheme } from 'shared/ui/AppButton/AppButton';
import { Modal } from 'shared/ui/Modal/Modal';
import { useCallback, useState } from 'react';


interface NavbarProps {
 className?: string;
}

export const Navbar = (props: NavbarProps) => {
    const { className } = props;
    const {t} = useTranslation()
    const [isOpen, setIsOpen] = useState(false)
    const onToggleModal = useCallback(() => {
        setIsOpen(prev=>!prev)
    }, [])
    return (
        <div className={classNames(cls.Navbar, {}, [className])} >
            <div className={cls.links}>
                <AppButton onClick={onToggleModal} theme={ButtonTheme.CLEAR}>{t('LogIn')}</AppButton>
            </div>
            <Modal isOpen={isOpen} toClose={onToggleModal}>
                {t('Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum pariatur soluta nostrum perspiciatis, rerum quaerat nulla quae dolores corporis atque.')}
            </Modal>
        </div>
    );
}