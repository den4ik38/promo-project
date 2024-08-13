import { Currency } from 'entities/Currency/model/types/currency';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import {classNames} from 'shared/lib/classNames/classNames';
import { AppSelect } from 'shared/ui/AppSelect/AppSelect';

interface CurrencySelectProps {
 className?: string;
 value?: Currency;
 onChange?: (value: Currency) => void;
 readonly?: boolean;
}

export const CurrencySelect = (props: CurrencySelectProps) => {
    const { className, value, onChange, readonly } = props;
    const {t} = useTranslation()
    const optionsList = [
        {value: Currency.RUB, content: Currency.RUB},
        {value: Currency.EUR, content: Currency.EUR},
        {value: Currency.USD, content: Currency.USD},
    ]
    const onChangeHandler = useCallback((value: string)=>{
        onChange?.(value as Currency)
    },[onChange])

    return (
        <AppSelect readonly={readonly} className={classNames('', {}, [className])} 
            label={t("Your currency")}
            value={value}
            onChange={onChangeHandler}
            options={optionsList}
        />
    );
}