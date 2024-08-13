import {classNames, Mods} from 'shared/lib/classNames/classNames';
import cls from './AppInput.module.scss';
import { InputHTMLAttributes, memo } from 'react';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface AppInputProps extends HTMLInputProps {
 className?: string;
 type?: string;
 value?: string | number;
 onChange?: (value: string)=>void;
 placeholder?: string;
 readonly?: boolean;
}

export const AppInput = memo((props: AppInputProps) => {
    const { className, placeholder, readonly, type = 'text', value, onChange, ...otherProps } = props;
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }
    const mods: Mods = {
        [cls.readonly]: readonly
    }
    return (
        <div className={cls.box}>
            {placeholder && <div className={cls.placeholderBox}>
                {placeholder}
            </div>}
            <input 
                readOnly={readonly}
                type={type} 
                value={value} 
                onChange={onChangeHandler} 
                className={classNames(cls.AppInput, mods, [className])}
                {...otherProps}
            />
        </div>
    );
})