import {classNames} from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppButton, ButtonTheme } from '../AppButton/AppButton';
import { memo } from 'react';

interface LangSwitcherProps {
 className?: string;
 short?: boolean
}

export const LangSwitcher = memo((props: LangSwitcherProps) => {
    const { className, short } = props;
    const {t, i18n} = useTranslation()
    const changeLang = async ()=>{
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
    }
    return (
        <AppButton onClick={changeLang} theme={ButtonTheme.CLEAR} className={classNames('', {}, [className])} >
            {short ? t('lang') : t('translate')}
        </AppButton>
    );
})