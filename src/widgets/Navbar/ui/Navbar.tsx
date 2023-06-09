import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import cls from "./Navbar.module.scss";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    const {t, i18n} = useTranslation();
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
			<div className={classNames(cls.links)}>
				<AppLink to='/' theme={AppLinkTheme.SECONDARY} className={classNames(cls.mainLink)}>{t('Главная')}</AppLink>
	            <AppLink to='/about' theme={AppLinkTheme.SECONDARY} className={classNames(cls.links)}>{t('О сайте')}</AppLink>
			</div>
        </div>
    )
}