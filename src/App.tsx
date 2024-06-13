import { Route, Routes } from "react-router-dom";
import './styles/index.scss'
import { Link } from "react-router-dom";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { Suspense } from "react";
import { UseTheme } from "./theme/UseTheme";
import { classNames } from "./helpers/classNames";

export const App = () => {
  const {theme, toggleTheme} = UseTheme();
 return (
  <div className={classNames('app', {}, [theme])} >
    <button onClick={toggleTheme}>Toggle</button>
    <Link to={'/'}>Главная</Link>
    <Link to={'/about'}>О нас</Link>
    <Suspense fallback={'Loading...'}>
      <Routes>
        <Route path={'/'} element={<MainPageAsync />} />
        <Route path={'/about'} element={<AboutPageAsync />} />
      </Routes>
    </Suspense>
  </div>
 );
}