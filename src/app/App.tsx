import { classNames } from "../shared/lib/classNames/classNames";
import { UseTheme } from "./providers/theme";
import { AppRouter } from "./providers/router";
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';

export const App = () => {
    const {theme} = UseTheme();

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