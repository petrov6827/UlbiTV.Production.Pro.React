import './styles/index.scss';
import { useTheme } from './providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';

export const App = () => {
	const {theme} = useTheme();

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