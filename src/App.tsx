import './styles/index.scss';
import { Suspense, useContext, useState } from "react"
import { Link, Route, Routes } from "react-router-dom"
import { Loading } from "./components/Loading/Loading"
import AboutPageAsync from "./pages/About/AboutPage.async"
import MainPageAsync from "./pages/MainPage/MainPage.async"
import { Theme, ThemeContext } from "./styles/Theme/ThemeContext"
import { useTheme } from './styles/Theme/useTheme';
import { classNames } from './helpers/classNames';

export const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <Link to='/about'>About</Link>
            <Link to='/'>MainPage</Link>

            <button onClick={toggleTheme}>Цвет темы</button>

            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path='/about' element={<AboutPageAsync />}></Route>
                    <Route path='/' element={<MainPageAsync />}></Route>
                </Routes>
            </Suspense>
        </div>
    )
} 