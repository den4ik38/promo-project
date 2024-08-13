import { getUserAuthData } from "entities/User"
import { memo, Suspense, useMemo } from "react"
import { useSelector } from "react-redux"
import { Routes, Route } from "react-router-dom"
import { routeConfig } from "shared/config"
import { PageLoader } from "widgets/PageLoader/ui/PageLoader"

export const AppRouter = memo(() => {
    const isAuth = useSelector(getUserAuthData)
    const checkRoutes = useMemo(()=>{
        return Object.values(routeConfig).filter((route)=>{
            if (!isAuth && route.authOnly) {
                return false
            }
            return true
        })
    },[isAuth])
    return (
    
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {
                    checkRoutes.map(({path, element})=>(
                        <Route 
                            path={path}
                            key={path}
                            element={<div className="page-wrapper">{element}</div>} />
                    ))
                }
            </Routes>
        </Suspense>
    
    )
})