import { FC, lazy } from 'react';
import { AuthFormProps } from './AuthForm';

const AuthFormAsync = lazy<FC<AuthFormProps>>(() => new Promise(resolve => {
    // @ts-ignore
    setTimeout(()=>resolve(import('./AuthForm')), 1500)
}));

export {
    AuthFormAsync
}