import {classNames} from 'shared/lib/classNames/classNames';
import cls from './AppSelect.module.scss';
import { ChangeEvent, useCallback, useMemo } from 'react';

export interface Selectoption {
  value: string;
  content: string
}

interface AppSelectProps {
 className?: string;
 label?: string;
 options?: Selectoption[];
 value?: string;
 onChange?: (value: string) => void;
 readonly?: boolean;
}

export const AppSelect = (props: AppSelectProps) => {
    const { className, label, options, value, onChange, readonly } = props;
    const optionsList = useMemo(() => {
        return options?.map((opt)=>(
            <option className={cls.option} key={opt.value} value={opt.value}>{opt.content}</option>
        ))
    }, [options])
    const OnChangeHandler = useCallback((e: ChangeEvent<HTMLSelectElement>)=>{
        
        onChange?.(e.target.value)
    }, [onChange])
    return (
        <div  className={cls.Wrapper}>
            {label && <span className={cls.label}>{label}</span>}
            <select disabled={readonly} value={value} onChange={OnChangeHandler} className={classNames(cls.AppSelect, {}, [className])}>
                {optionsList}
            </select>
        </div>
    );
}