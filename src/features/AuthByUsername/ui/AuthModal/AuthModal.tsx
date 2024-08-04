import {classNames} from 'shared/lib/classNames/classNames';
import cls from './AuthModal.module.scss';
import { Modal } from 'shared/ui/Modal/Modal';
import { AuthForm } from '../AuthForm/AuthForm';

interface AuthModalProps {
 className?: string;
 isOpen: boolean;
 onClose: ()=>void;
}

export const AuthModal = (props: AuthModalProps) => {
    const { className, isOpen, onClose } = props;

    return (
        <Modal lazy isOpen={isOpen} onClose={onClose} className={classNames(cls.AuthModal, {}, [className])} >
            <AuthForm />
        </Modal>
    );
}