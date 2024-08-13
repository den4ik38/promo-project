
import { Country } from '../../model/types/country';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import {classNames} from 'shared/lib/classNames/classNames';
import { AppSelect } from 'shared/ui/AppSelect/AppSelect';

interface CountrySelectProps {
 className?: string;
 value?: Country;
 onChange?: (value: Country) => void;
 readonly?: boolean;
}

export const CountrySelect = (props: CountrySelectProps) => {
    const { className, value, onChange, readonly } = props;
    const {t} = useTranslation()
    const optionsList = [
        {value: Country.Belarus, content: Country.Belarus},
        {value: Country.Kazahstan, content: Country.Kazahstan},
        {value: Country.Russia, content: Country.Russia},
        {value: Country.Thailand, content: Country.Thailand},
    ]
    const onChangeHandler = useCallback((value: string)=>{
        onChange?.(value as Country)
    },[onChange])

    return (
        <AppSelect className={classNames('', {}, [className])} 
            readonly={readonly}
            label={t("Your Country")}
            value={value}
            onChange={onChangeHandler}
            options={optionsList}
        />
    );
}