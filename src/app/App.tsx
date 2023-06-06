import './styles/index.scss';
import { Link, Route, Routes } from "react-router-dom"
import { useTheme } from './providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

export const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <Navbar />
            <ThemeSwitcher />
            
            {/* <button onClick={toggleTheme}>Цвет темы</button> */}

            <AppRouter />
        </div>
    )
}