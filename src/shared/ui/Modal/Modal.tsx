import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Modal.module.scss';
import { MouseEvent, ReactNode, useCallback, useEffect, useState } from 'react';
import { Portal } from '../Portal/Portal';
import { UseTheme } from 'app/providers/theme';

interface ModalProps {
 className?: string;
 children: ReactNode;
 isOpen?: boolean;
 onClose?: ()=>void;
 lazy?: boolean;
}

export const Modal = (props: ModalProps) => {
    const { className, children, lazy, isOpen = false, onClose } = props;
    const {theme} = UseTheme();
    const [isMounted, setIsMounted] = useState(false)
    const mods = {
        [cls.opened]: isOpen,
        [cls[theme]]: true
    }
    useEffect(()=>{
        if ( isOpen) {
            setIsMounted(true)
        }
    }, [isOpen, lazy])
    const closeHandler = useCallback(()=>{
        if (onClose) {
            onClose()
        }
    }, [onClose])
    const stopPropag = (e: MouseEvent) => {
        e.stopPropagation()
    }
    
    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler()
        }
    }, [closeHandler])
    useEffect(()=>{
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown)
        }
        return ()=>{
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [isOpen, onKeyDown])

    if (lazy && !isMounted) {
        return null
    }
    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])} >
                <div className={cls.overlay} onClick={closeHandler}>
                    <div onClick={stopPropag} className={cls.content}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
}