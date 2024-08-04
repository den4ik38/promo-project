import {classNames} from 'shared/lib/classNames/classNames';
import cls from './AppInput.module.scss';
import { InputHTMLAttributes, useEffect, useRef, useState } from 'react';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface AppInputProps extends HTMLInputProps {
 className?: string;
 type?: string;
 value?: string;
 onChange?: (value: string)=>void;
//  autoFocus?: boolean;
}

export const AppInput = (props: AppInputProps) => {
    const { className, type = 'text', value, onChange, ...otherProps } = props;
    // const ref = useRef<HTMLInputElement>()
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }
    // const [isFocused, setIsFocused] = useState(false)
    // useEffect(() => {
    //     if (autoFocus) {
    //         setIsFocused(true);
    //         ref.current?.focus();
    //     }
      
    //     return () => setIsFocused(false);
    // }, [autoFocus, isFocused]);

    return (
        <input 
            type={type} 
            value={value} 
            // ref={ref}
            // autoFocus={isFocused}
            onChange={onChangeHandler} 
            className={classNames(cls.AppInput, {}, [className])}
            {...otherProps}
        />
    );
}