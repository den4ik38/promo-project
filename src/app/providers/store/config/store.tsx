import { ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { StateSchema } from './StateSchema'
import { CounterReducer } from 'entities/Counter'
import { UserReducer } from 'entities/User'
import { createReducerManager } from './ReducerManager'



export const createReduxStore = (initialState?: StateSchema, asyncReducers?: ReducersMapObject<StateSchema>) => {

    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: CounterReducer,
        user: UserReducer,
    }

    const ReducerManager = createReducerManager(rootReducers)

    const store = configureStore<StateSchema>({
        reducer: ReducerManager.reduce,
        devTools: __IS_DEV_,
        preloadedState: initialState
    })
    //@ts-ignore
    store.reducerManager = ReducerManager;

    return store
}
