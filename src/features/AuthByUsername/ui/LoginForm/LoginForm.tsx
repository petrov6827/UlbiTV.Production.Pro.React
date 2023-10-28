import { useCallback, memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { Text, TextTheme } from 'shared/ui/Text/Text';

export interface LoginFormProps {
    className?: string;
}

const LoginForm = memo(({className} : LoginFormProps) => {
	const {t} = useTranslation();
	const dispatch = useDispatch();
	
	// const loginForm = useSelector(getLoginState);
	const {username, password, error, isLoading} = useSelector(getLoginState);
	console.log(username)

	const onChangeUsername = useCallback((value:string) => {
		dispatch(loginActions.setUsername(value))
	}, [dispatch])

	const onChangePassword = useCallback((value:string) => {
		dispatch(loginActions.setPassword(value))
	}, [dispatch])

	const onLoginClick = useCallback(() => {
		dispatch(loginByUsername({username,password}))
	}, [dispatch, password, username])

	return (
		<div className={classNames(cls.loginForm, {}, [className])}>
			<Text text={t('Форма авторизации')} />
			{error && <Text text={error} theme={TextTheme.ERROR}/>}
			<Input 
				type="text" 
				className={cls.input} 
				placeholder={t('Введите имя')} 
				autofocus
				onChange={onChangeUsername}
				value={username}
			/>
			<Input 
				type="text" 
				className={cls.input} 
				placeholder={t('Введите пароль')}
				onChange={onChangePassword}
				value={password}
			/>
			<Button 
				className={classNames(cls.loginBtn, {}, [className])} 
				theme={ButtonTheme.OUTLINE}
				onClick={onLoginClick}
				// disabled={password && username ? false : true}
				disabled={isLoading}
			>
				{t('Войти')}
			</Button>
		</div>
	)
})

export default LoginForm;