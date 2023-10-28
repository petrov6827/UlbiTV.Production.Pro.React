import type { InputHTMLAttributes} from 'react';
import { useState} from 'react';
import { useEffect, useRef} from 'react';
import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

// type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
// позволяет забрать из типа все пропсы(первым аргументом) 
// но исключить которые нам не нужны - вторым аргументом

type HTMLInutProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInutProps {
	className?: string
	value?: string
	onChange?: (value: string) => void
	autofocus?: boolean,
	// ref?: MutableRefObject<HTMLDivElement>
}

export const Input = memo((props: InputProps) => {
	const { 
		className, 
		value, 
		onChange,
		type = "text",
		autofocus,
		...otherProps
	} = props;

	const ref = useRef<HTMLInputElement>(null);
	const [, setIsFocused] = useState(false);

	useEffect(()=> {
		if(autofocus) {
			setIsFocused(true)
			ref.current?.focus()
		}
	}, [autofocus])

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value)
	}

	return (
		<div className={classNames(cls.input, {}, [className])}>
			<input 
				type={type} 
				value={value}
				onChange={onChangeHandler}
				// eslint-disable-next-line react/no-unknown-property
				// onFocus={onFocus}
				ref={ref}
				{...otherProps}
			/>
		</div>
	)
})