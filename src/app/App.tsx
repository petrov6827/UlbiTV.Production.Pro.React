import './styles/index.scss';
import { Suspense } from "react"
import { Link, Route, Routes } from "react-router-dom"
import { useTheme } from './providers/ThemeProvider';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { classNames } from 'shared/lib/classNames/classNames';

export const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <Link to='/about'>About</Link>
            <Link to='/'>MainPage</Link>

            <button onClick={toggleTheme}>Цвет темы</button>

            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/about' element={<AboutPage />}></Route>
                    <Route path='/' element={<MainPage />}></Route>
                </Routes>
            </Suspense>
        </div>
    )
} 