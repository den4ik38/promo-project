import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {classNames} from 'shared/lib/classNames/classNames';
import { AppButton, ButtonTheme } from 'shared/ui/AppButton/AppButton';

interface BugButtonProps {
 className?: string;
}

export const BugButton = (props: BugButtonProps) => {
    const { className } = props;
    const { t } = useTranslation() 
    const [ error, setError ] = useState(false)
    useEffect(()=>{
        if (error) {
            throw new Error;
        }
    }, [error])
    const throwErr = ()=>{
        setError(prev=>!prev)
    }
    return (
        <AppButton onClick={throwErr} theme={ButtonTheme.OUTLINE} className={classNames('', {}, [className])} >
            {t('Throw Bug')}
        </AppButton>
    );
}