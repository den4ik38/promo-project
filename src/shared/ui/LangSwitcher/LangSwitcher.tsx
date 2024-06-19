import {classNames} from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppButton, ButtonTheme } from '../AppButton/AppButton';

interface LangSwitcherProps {
 className?: string;
}

export const LangSwitcher = (props: LangSwitcherProps) => {
    const { className } = props;
    const {t, i18n} = useTranslation()
    const changeLang = async ()=>{
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
    }
    return (
        <AppButton onClick={changeLang} theme={ButtonTheme.CLEAR} className={classNames('', {}, [className])} >
            {t('translate')}
        </AppButton>
    );
}