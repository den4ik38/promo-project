import {classNames} from 'shared/lib/classNames/classNames';
import cls from './PageError.module.scss';
import { AppButton, ButtonTheme } from 'shared/ui/AppButton/AppButton';
import { useTranslation } from 'react-i18next';

interface PageErrorProps {
 className?: string;
}

export const PageError = (props: PageErrorProps) => {
    const { className } = props;
    const {t} = useTranslation()
    const pageReload = () => {
        location.reload()
    }
    return (
        <div className={classNames(cls.PageError, {}, [className])} >
            <h1>{t('Something went wrong')}</h1>
            <AppButton onClick={pageReload} theme={ButtonTheme.OUTLINE}>{t('Reload Page')}</AppButton>
        </div>
    );
}