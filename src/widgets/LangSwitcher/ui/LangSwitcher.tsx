// import { changeLanguage } from "i18next";
import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
// import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Button } from "shared/ui/Button/Button";
import cls from "./LangSwitcher.module.scss";

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher:FC<LangSwitcherProps> = () => {
	const {i18n} = useTranslation();

	const useRus = () => {
		i18n.changeLanguage('ru')
	}
	const useEng = () => {
		i18n.changeLanguage('en')
	}
    
	// eslint-disable-next-line i18next/no-literal-string
	return <div className={classNames(cls.langswitcher, {}, [])}>
		<Button onClick={useRus}>RU</Button>
		<Button onClick={useEng}>EN</Button>
	</div>
};