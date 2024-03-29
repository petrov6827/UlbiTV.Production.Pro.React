import type { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
// import { LoginForm } from '../LoginForm/LoginForm';
import LoginFormAsync from '../LoginForm/LoginForm.async';
import cls from './LoginModal.module.scss';

interface LoginModalProps {
    className?: string;
	isOpen: boolean;
	onClose: () => void
}

export const LoginModal: FC<LoginModalProps> = (props) => {
	const { className, isOpen, onClose } = props;

	return (
		<Modal className={classNames(cls.loginModal, {}, [className])}
			isOpen={isOpen}
			onClose={onClose}
			lazy
		>
			<LoginFormAsync />
		</Modal>
	)
}