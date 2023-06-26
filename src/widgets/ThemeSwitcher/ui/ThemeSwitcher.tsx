import { Theme, useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import cls from './ThemeSwitcher.module.scss';
import LightIcon from "shared/assets/icons/theme-light.svg";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
// import GreenIcon from "shared/assets/icons/green.svg";
// import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { memo } from "react";
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
	const { theme, toggleTheme } = useTheme();

	return (
		<Button
            
			onClick={toggleTheme}
			theme={ThemeButton.CLEAR}
			// square
			// size={ButtonSize.XL}
			className={classNames(cls.themeSwitcher, {}, [className])}
		>
			{theme === Theme.DARK && <DarkIcon />}
			{theme === Theme.LIGHT && <LightIcon />}
			{/* {theme === Theme.GREEN && <GreenIcon/>} */}
		</Button>
	);
});
