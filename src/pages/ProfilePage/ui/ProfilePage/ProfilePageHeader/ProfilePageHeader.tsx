import {classNames} from 'shared/lib/classNames/classNames';
import cls from './ProfilePageHeader.module.scss';
import { useTranslation } from 'react-i18next';
import { AppText } from 'shared/ui/AppText/AppText';
import { AppButton, ButtonTheme } from 'shared/ui/AppButton/AppButton';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { getProfileReadOnly, ProfileActions, UpdateProfileData } from 'entities/Profile';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';

interface ProfilePageHeaderProps {
 className?: string;
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
    const { className } = props;
    const {t} = useTranslation('profile')
    const dispatch = useAppDispatch();
    const readonly = useSelector(getProfileReadOnly)

    const onEdit = useCallback(()=>{
        dispatch(ProfileActions.setReadOnly(false))
    }, [dispatch])
    const onCancelEdit = useCallback(()=>{
        dispatch(ProfileActions.cancelUpdateProfileData())
        dispatch(ProfileActions.setReadOnly(true))
    }, [dispatch])
    const onSaveEdit = useCallback(()=>{
        dispatch(UpdateProfileData())
        dispatch(ProfileActions.setReadOnly(true))
    }, [dispatch])

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])} >
            <AppText title={t('Profile')}></AppText>
            {readonly
                ? (
                    <AppButton
                        className={cls.editBtn}
                        theme={ButtonTheme.OUTLINE}
                        onClick={onEdit}
                    >
                        {t('Edit')}
                    </AppButton>
                )
                : (
                    <>
                        <AppButton
                            className={cls.editBtn}
                            theme={ButtonTheme.OUTLINE_RED}
                            onClick={onCancelEdit}
                        >
                            {t('Cancel')}
                        </AppButton>
                        <AppButton
                            className={cls.saveBtn}
                            theme={ButtonTheme.OUTLINE}
                            onClick={onSaveEdit}
                        >
                            {t('Save')}
                        </AppButton>
                    </>
                )}
        </div>
    );
}