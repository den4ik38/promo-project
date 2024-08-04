import {classNames} from 'shared/lib/classNames/classNames';
import cls from './AuthForm.module.scss';
import { AppInput } from 'shared/ui/AppInput/AppInput';
import { AppButton, ButtonTheme } from 'shared/ui/AppButton/AppButton';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { LoginActions } from 'features/AuthByUsername/model/slice/loginSlice';
import { getLoginForm } from 'features/AuthByUsername/model/selectors/getLoginForm';
import { LoginByUsername } from 'features/AuthByUsername/model/services/LoginByUsername/LoginByUsername';
import { AppText, TextTheme } from 'shared/ui/AppText/AppText';

interface AuthFormProps {
 className?: string;
}

export const AuthForm = memo((props: AuthFormProps) => {
    const { className } = props;
    const {t} = useTranslation()
    const dispatch = useDispatch()
    const {password, username, error, isLoading} = useSelector(getLoginForm)
    const onChangeUsername = useCallback((value: string)=>{
        dispatch(LoginActions.setUsername(value))
    }, [dispatch])
    const onChangePassword = useCallback((value: string)=>{
        dispatch(LoginActions.setPassword(value))
    }, [dispatch])
    const onLoginClick = useCallback(()=>{
        dispatch(LoginByUsername({username, password}))
    }, [dispatch, password, username])
    return (
        <div className={classNames(cls.AuthForm, {}, [className])}>
            <AppText className={cls.title} title={t('Authorization Form')} />
            <AppInput value={username} onChange={onChangeUsername} placeholder={t('Insert your name')} autoFocus className={cls.input} />
            <AppInput value={password} onChange={onChangePassword} placeholder={t('Insert your password')} className={cls.input} />
            {error && <AppText className={cls.title} theme={TextTheme.ERROR} text={error} />}
            <AppButton disabled={isLoading} onClick={onLoginClick} className={cls.btn} theme={ButtonTheme.OUTLINE}>
                {t('LogIn')}
            </AppButton>
        </div>
    )
})