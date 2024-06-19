import {classNames} from 'shared/lib/classNames/classNames';
import cls from './NotFoundPage.module.scss';
import { useTranslation } from 'react-i18next';

interface NotFoundPageProps {
 className?: string;
}

export const NotFoundPage = (props: NotFoundPageProps) => {
    const { className } = props;
    const {t} = useTranslation()
    return (
        <div className={classNames(cls.NotFoundPage, {}, [className])} >
            <h1>{t('Page nnot found')}</h1>
        </div>
    );
}