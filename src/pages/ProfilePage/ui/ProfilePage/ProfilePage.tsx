import {classNames} from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import {
    fetchProfileData,
    getProfileError, 
    getProfileForm, 
    getProfileIsLoading, 
    getProfileReadOnly, 
    getValidateErrors, 
    ProfileActions, 
    ProfileCard, 
    ProfileReducer } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { AppText, TextTheme } from 'shared/ui/AppText/AppText';
import { ValidatesErrors } from 'entities/Profile/types/profile';
import { useTranslation } from 'react-i18next';

interface ProfilePageProps {
 className?: string;
}

export const Reducers: ReducersList = {
    profile: ProfileReducer
}

const ProfilePage = (props: ProfilePageProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const form = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    const readonly = useSelector(getProfileReadOnly);
    const formErrors = useSelector(getValidateErrors)
    const {t} = useTranslation('profile')

    const validateErrorsTranscriped = {
        [ValidatesErrors.INCORRECT_AGE]: t('Incorrect age'),
        [ValidatesErrors.INCORRECT_NAME]: t('Incorrect name'),
        [ValidatesErrors.NO_DATA]: t('No data'),
        [ValidatesErrors.SERVER_ERROR]: t('Server error')
    }

    useEffect(()=>{
        if (__PROJECT_ !== 'storybook') {
            dispatch(fetchProfileData())
        }
    },[dispatch])

    const onChangeFirstname = useCallback((value?: string)=>{
        dispatch(ProfileActions.updateProfile({
            first: value || ''
        }))
    },[dispatch])

    const onChangeLastname = useCallback((value?: string)=>{
        dispatch(ProfileActions.updateProfile({
            lastname: value || ''
        }))
    },[dispatch])

    const onChangeAge = useCallback((value?: string)=>{
        dispatch(ProfileActions.updateProfile({
            age: Number(value || 0)
        }))
    },[dispatch])

    const onChangeCity = useCallback((value?: string)=>{
        dispatch(ProfileActions.updateProfile({
            city: value || ''
        }))
    },[dispatch])

    const onChangeUsername = useCallback((value?: string)=>{
        dispatch(ProfileActions.updateProfile({
            username: value || ''
        }))
    },[dispatch])

    const onChangeAvatar = useCallback((value?: string)=>{
        dispatch(ProfileActions.updateProfile({
            avatar: value || ''
        }))
    },[dispatch])

    const onChangeCurrency = useCallback((currency?: Currency)=>{
        dispatch(ProfileActions.updateProfile({
            currency
        }))
    },[dispatch])

    const onChangeCountry = useCallback((country?: Country)=>{
        
        dispatch(ProfileActions.updateProfile({
            country
        }))
    },[dispatch])

    return (
        <DynamicModuleLoader removeAfterUnmount reducers={Reducers}>
            <div className={classNames('', {}, [className])} >
                <ProfilePageHeader />
                {formErrors?.length && formErrors.map((err)=>{
                    return <AppText key={err} theme={TextTheme.ERROR} text={validateErrorsTranscriped[err]} />
                })}
                <ProfileCard 
                    onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                    readonly={readonly} 
                    data={form} 
                    error={error} 
                    isLoading={isLoading}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry} />
            </div>
        </DynamicModuleLoader>
    );
}

export default ProfilePage;