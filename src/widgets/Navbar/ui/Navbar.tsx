import { LoginModal } from "features/AuthByUsername";
import { memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import cls from "./Navbar.module.scss";
import { getUserAuthData, userActions } from "../../../entities/User";

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({className}: NavbarProps) => {
	const {t} = useTranslation();
	const [isAuthModal, setIsAuthModal] = useState(false);
	const authData = useSelector(getUserAuthData)
	const dispatch = useDispatch();

	const onCloseModal = useCallback(() => {
		setIsAuthModal(false)
	},[])
	const onShowModal = useCallback(() => {
		setIsAuthModal(true)
	},[])
	const onLogout = () => {
		dispatch(userActions.logout())
	}
	// const onLogout = useCallback(() => {
	// 	dispatch(userActions.logout())
	// },[dispatch])

	if(authData) {
		return (
			<div className={classNames(cls.navbar, {}, [className])}>
				<Button
					theme={ButtonTheme.CLEAR_INVERTED}
					onClick={onLogout}>
					{t('Выйти')}
				</Button>
			</div>
		)
	}

	return (
		<div className={classNames(cls.navbar, {}, [className])}>
			<Button
				theme={ButtonTheme.CLEAR_INVERTED}
				onClick={onShowModal}>
				{t('Войти')}
			</Button>
			{/* <LoginModal
				isOpen={isAuthModal}
				onClose={onCloseModal}
			/> */}
			{isAuthModal && <LoginModal
				isOpen={isAuthModal}
				onClose={onCloseModal}
			/>}
		</div>
	)
})