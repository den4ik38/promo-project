import { classNames } from "../shared/lib/classNames/classNames";
import { UseTheme } from "./providers/theme";
import { AppRouter } from "./providers/router";
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useEffect } from 'react';
import { UserActions } from "entities/User";
import { useDispatch } from "react-redux";

export const App = () => {
    const {theme} = UseTheme();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(UserActions.initAuthData())
    }, [dispatch])
    return (
        <div className={classNames('app', {}, [theme])} >
            <Suspense fallback="">
                <Navbar />
                <div className='content-page'>
                    <Sidebar></Sidebar>
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}