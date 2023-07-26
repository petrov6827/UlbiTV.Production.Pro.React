import type { ButtonHTMLAttributes, FC} from 'react';
import { memo } from 'react'
import type { Mods } from 'shared/lib/classNames/classNames';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

// export enum ThemeButton {
//     CLEAR = 'clear',
//     OUTLINE = 'outline'
// }

// export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
//     className?: string;
//     theme?: ThemeButton;
// 	square?: boolean;
// }

// export const Button: FC<ButtonProps> = (props) => {
// 	const { 
// 		className,
// 		children,
// 		theme,
// 		square,
// 		...otherProps
// 	} = props;

// 	const mods: Record<string, boolean> = [
// 		[cls[theme]]: true,
// 		[cls.square]: square
// 	]

// 	return (
// 		<button className={classNames(cls.button, mods, [className])}
// 			{...otherProps}
// 		>
// 			{children}
// 		</button>
// 	)
// }

export enum ButtonTheme {
	CLEAR = "clear",
	OUTLINE = "outline",
	OUTLINE_RED = "outlineRed",
	CLEAR_INVERTED="clearInverted",
	BACKGROUND = "background",
	BACKGROUND_INVERTED = "backgroundInverted"
}
  
export enum ButtonSize {
	M = "size_m",
	L = "size_l",
	XL = "size_xl"
}
  
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: ButtonTheme;
	square?: boolean;
	size?: ButtonSize
	disabled?: boolean
}
  
export const Button: FC<ButtonProps> = memo((props: ButtonProps) => {
	const { 
		className,
		children,
		theme = ButtonTheme.OUTLINE,
		square,
		disabled,
		size = ButtonSize.M,
		...otherProps } = props;
  
	const mods:Mods = {
		[cls[theme]]: true,
		[cls.square]: square,
		[cls[size]]: true,
		[cls.disabled]:disabled
	}
  
	return (
		<button
			className={classNames(cls.button, mods, [className, cls[theme]])}
			disabled={disabled}
			{...otherProps}
		>
			{children}
		</button>
	);
});
  