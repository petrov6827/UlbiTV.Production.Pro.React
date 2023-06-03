import './styles/index.scss';
import { Suspense } from "react"
import { Link, Route, Routes } from "react-router-dom"
import AboutPageAsync from "../pages/AboutPage/AboutPage.async"
import MainPageAsync from "../pages/MainPage/MainPage.async"
import { classNames } from '../helpers/classNames'
// import { useTheme } from './providers/ThemeProvider/lib/useTheme'
import { useTheme } from './providers/ThemeProvider';

export const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <Link to='/about'>About</Link>
            <Link to='/'>MainPage</Link>

            <button onClick={toggleTheme}>Цвет темы</button>

            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/about' element={<AboutPageAsync />}></Route>
                    <Route path='/' element={<MainPageAsync />}></Route>
                </Routes>
            </Suspense>
        </div>
    )
} 