import { Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import { routeConfig } from "shared/config"
import { PageLoader } from "widgets/PageLoader/ui/PageLoader"

export const AppRouter = () => {
    return (
    
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {
                    Object.values(routeConfig)
                        .map(({path, element})=>(
                            <Route 
                                path={path}
                                key={path}
                                element={<div className="page-wrapper">{element}</div>} />
                        ))
                }
            </Routes>
        </Suspense>
    
    )
}