import {classNames} from 'shared/lib/classNames/classNames';
import cls from './AuthForm.module.scss';
import { AppInput } from 'shared/ui/AppInput/AppInput';
import { AppButton, ButtonTheme } from 'shared/ui/AppButton/AppButton';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { LoginActions, LoginReducer } from '../../model/slice/loginSlice';
import { LoginByUsername } from '../../model/services/LoginByUsername/LoginByUsername';
import { AppText, TextTheme } from 'shared/ui/AppText/AppText';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

export interface AuthFormProps {
 className?: string;
 onSucces?: ()=>void;
}

const InitialReducers: ReducersList= {loginForm: LoginReducer}

const AuthForm = memo((props: AuthFormProps) => {
    const { className, onSucces } = props;
    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    const password = useSelector(getLoginPassword);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginIsLoading);
    const username = useSelector(getLoginUsername);

    
    const onChangeUsername = useCallback((value: string)=>{
        dispatch(LoginActions.setUsername(value))
    }, [dispatch])
    const onChangePassword = useCallback((value: string)=>{
        dispatch(LoginActions.setPassword(value))
    }, [dispatch])
    const onLoginClick = useCallback(async ()=>{
        const result = await dispatch(LoginByUsername({username, password}))
        if (result.meta.requestStatus === 'fulfilled') {
            onSucces?.()
        }
    }, [onSucces, dispatch, password, username])
    return (
        <DynamicModuleLoader removeAfterUnmount reducers={InitialReducers}>
            <div className={classNames(cls.AuthForm, {}, [className])}>
                <AppText className={cls.title} title={t('Authorization Form')} />
                <AppInput 
                    value={username} onChange={onChangeUsername} placeholder={t('Insert your name')} autoFocus className={cls.input} />
                <AppInput value={password} onChange={onChangePassword} placeholder={t('Insert your password')} className={cls.input} />
                {error && <AppText className={cls.title} theme={TextTheme.ERROR} text={error} />}
                <AppButton disabled={isLoading} onClick={onLoginClick} className={cls.btn} theme={ButtonTheme.OUTLINE}>
                    {t('LogIn')}
                </AppButton>
            </div>
        </DynamicModuleLoader>
    )
})

export default AuthForm;