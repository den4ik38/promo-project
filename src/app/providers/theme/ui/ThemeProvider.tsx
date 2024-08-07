import { FC, useEffect, useMemo, useState } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";

interface themeProviderProps {
    initialTheme?: Theme
}

export const ThemeProvider: FC<themeProviderProps> = ({children, initialTheme}) => {
    const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);
    const defaultProps = useMemo(()=>({
        theme: theme,
        setTheme: setTheme,
    }), [theme])
    useEffect(()=>{
        document.body.classList.add(theme)
        return () => {
            document.body.classList.remove(theme);
        };
    },[theme])
    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}