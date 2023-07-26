
import { useTheme } from './providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/User';

export const App = () => {
	const {theme} = useTheme();
	const dispatch = useDispatch();

	useEffect(()=> {
		dispatch(userActions.initAuthData);
	}, [dispatch])

	return (
		<Suspense fallback="">
			<div className={classNames("app", {}, [theme])}>
				<Navbar />
				<div className="content-page">
					<Sidebar /> 
					<AppRouter />
				</div>
			</div>
		</Suspense>
	)
}