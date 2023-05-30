import { Suspense, useState } from "react"
import { Link, Route, Routes } from "react-router-dom"
import { Loading } from "./components/Loading/Loading"
import AboutPageAsync from "./pages/About/AboutPage.async"
import MainPageAsync from "./pages/MainPage/MainPage.async"
import './styles/index.scss';

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
}

export const App = () => {
    const [theme, setTheme] = useState<Theme>(Theme.LIGHT)

    const toggleTheme = setTheme(Theme.LIGHT ? Theme.DARK : Theme.LIGHT)

    return (
        <div className={`app ${theme}`}>
            <Link to='/about'>About</Link>
            <Link to='/'>MainPage</Link>

            {/* <button onClick={toggleTheme}>{Theme.LIGHT ? 'Темная тема' : 'Светлая тема'}</button> */}

            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path='/about' element={<AboutPageAsync />}></Route>
                    <Route path='/' element={<MainPageAsync />}></Route>
                </Routes>
            </Suspense>
        </div>
    )
} 