import './styles/index.scss';
import { Link, Route, Routes } from "react-router-dom"
import { useTheme } from './providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';

export const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <Link to='/about'>About</Link>
            <Link to='/'>MainPage</Link>
            <button onClick={toggleTheme}>Цвет темы</button>
            
            <AppRouter />
        </div>
    )
} 