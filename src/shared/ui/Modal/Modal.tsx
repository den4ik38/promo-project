import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Modal.module.scss';
import { MouseEvent, ReactNode, useCallback, useEffect } from 'react';
import { Portal } from '../Portal/Portal';
import { UseTheme } from 'app/providers/theme';

interface ModalProps {
 className?: string;
 children: ReactNode;
 isOpen?: boolean;
 toClose?: ()=>void;
}

export const Modal = (props: ModalProps) => {
    const { className, children, isOpen = false, toClose } = props;
    const {theme} = UseTheme();
    const mods = {
        [cls.opened]: isOpen,
        [cls[theme]]: true
    }
    const closeHandler = useCallback(()=>{
        if (toClose) {
            toClose()
        }
    }, [toClose])
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