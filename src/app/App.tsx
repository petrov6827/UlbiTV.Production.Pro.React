import './styles/index.scss';
import { useTheme } from './providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useState } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';

export const App = () => {
	const {theme} = useTheme();
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Suspense fallback="">
			<div className={classNames("app", {}, [theme])}>
				<Navbar />
				<button onClick={() => setIsOpen(true)}>toggle</button>
				<button onClick={() => setIsOpen(false)}>close</button>
				<Modal 
					isOpen={isOpen}
					onClose={() => setIsOpen(false)}
				/>
				<div className="content-page">
					<Sidebar /> 
					<AppRouter />
				</div>
			</div>
		</Suspense>
	)
}