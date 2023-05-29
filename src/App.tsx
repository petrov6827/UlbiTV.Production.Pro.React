import { Suspense } from "react"
import { Link, Route, Routes } from "react-router-dom"
import { Loading } from "./components/Loading/Loading"
import AboutPageAsync from "./pages/About/AboutPage.async"
import MainPageAsync from "./pages/MainPage/MainPage.async"

export const App = () => {
    return (
        <div className="App">
            <Link to='/about'>About</Link>
            <Link to='/'>MainPage</Link>

            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path='/about' element={<AboutPageAsync />}></Route>
                    <Route path='/' element={<MainPageAsync />}></Route>
                </Routes>
            </Suspense>
        </div>
    )
} 