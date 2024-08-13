import { ReducersMapObject, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { StateSchema } from './StateSchema'
import { CounterReducer } from 'entities/Counter'
import { UserReducer } from 'entities/User'
import { createReducerManager } from './ReducerManager'
import { $api } from 'shared/api/api';
import { NavigateOptions, To } from 'react-router-dom'


export const createReduxStore = (
    initialState?: StateSchema, 
    asyncReducers?: ReducersMapObject<StateSchema>, 
    navigate?: (to: To, options?: NavigateOptions) => void) => {

    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: CounterReducer,
        user: UserReducer,
    }

    const ReducerManager = createReducerManager(rootReducers)

    const store = configureStore({
        reducer: ReducerManager.reduce,
        devTools: __IS_DEV_,
        preloadedState: initialState,
        middleware: getDefaultMiddleware => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: $api,
                    navigate
                }
            }
        })
    })
    //@ts-ignore
    store.reducerManager = ReducerManager;

    return store
}
//eslint-disable-next-line
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];