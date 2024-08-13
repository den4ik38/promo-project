import {classNames} from 'shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import { AppText, TextAlign } from 'shared/ui/AppText/AppText';
import { useTranslation } from 'react-i18next';
import { AppInput } from 'shared/ui/AppInput/AppInput';
import { Profile } from 'entities/Profile/types/profile';
import { TFunctionResult } from 'i18next';
import { Loader } from 'shared/ui/Loader/Loader';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import { Avatar } from 'shared/ui/Avatar/Avatar';

interface ProfileCardProps {
 className?: string;
 data?: Profile;
 error?: TFunctionResult;
 isLoading?: boolean;
 readonly?: boolean;
 onChangeFirstname?: (value: string)=>void;
 onChangeLastname?: (value: string)=>void;
 onChangeAge?: (value: string)=>void;
 onChangeCity?: (value: string)=>void;
 onChangeUsername?: (value: string)=>void;
 onChangeAvatar?: (value: string)=>void;
 onChangeCurrency?: (currency: Currency)=>void;
 onChangeCountry?: (country: Country)=>void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const { className, 
        readonly, 
        data, 
        error, 
        isLoading, 
        onChangeFirstname, 
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry
    } = props;
    const {t} = useTranslation('profile')

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])} >
                <AppText align={TextAlign.CENTER}  title={t('We cant load profile')} text={t('Try to reload')}/>
            </div>)
    }
    
    if (isLoading ) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.isLoading])} >
                <Loader />
            </div>
        )
    }

    return (
        <div className={classNames(cls.ProfileCard, {[cls.edit]: !readonly}, [className])} >
            <div className={cls.data}>
                {data?.avatar && <div className={cls.avatarBox}>
                    <Avatar src={data?.avatar}/>
                </div>}
                
                <AppInput 
                    onChange={onChangeFirstname} 
                    readonly={readonly} 
                    value={data?.first} 
                    className={cls.input} placeholder={t('Your Name')} />
                <AppInput onChange={onChangeLastname} 
                    readonly={readonly} 
                    value={data?.lastname} 
                    className={cls.input} placeholder={t('Your Surname')} />
                <AppInput 
                    onChange={onChangeAge} 
                    readonly={readonly} 
                    value={data?.age} 
                    className={cls.input} placeholder={t('Your age')} />
                <AppInput 
                    onChange={onChangeCity} 
                    readonly={readonly} 
                    value={data?.city} 
                    className={cls.input} placeholder={t('Your city')} />
                <AppInput 
                    onChange={onChangeUsername} 
                    readonly={readonly} 
                    value={data?.username} 
                    className={cls.input} placeholder={t('Your username')} />
                <AppInput 
                    onChange={onChangeAvatar} 
                    readonly={readonly} 
                    value={data?.avatar} 
                    className={cls.input} placeholder={t('Your avatar link')} />
                <CurrencySelect onChange={onChangeCurrency} readonly={readonly} 
                    value={data?.currency} className={cls.input}/>
                <CountrySelect onChange={onChangeCountry} readonly={readonly} 
                    value={data?.country} className={cls.input}/>
            </div>
        </div>
    );
}
