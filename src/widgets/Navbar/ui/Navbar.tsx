// import { LoginModal } from "features/AuthByUsername";
import { LoginModal } from "features/AuthByUsername";
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import cls from "./Navbar.module.scss";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
	const {t} = useTranslation();
	const [isAuthModal, setIsAuthModal] = useState(false);

	const onCloseModal = useCallback(() => {
		setIsAuthModal(false)
	},[])
	const onShowModal = useCallback(() => {
		setIsAuthModal(true)
	},[])
	
	return (

		<div className={classNames(cls.navbar, {}, [className])}>
			<Button
				theme={ButtonTheme.CLEAR_INVERTED}
				// className={classNames(cls.signin)}
				onClick={onShowModal}>
				{t('Войти')}
			</Button>
			<LoginModal
				isOpen={isAuthModal}
				onClose={onCloseModal}
			/>
		</div>
	)
}