import { ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { StateSchema } from './StateSchema'
import { CounterReducer } from 'entities/Counter'
import { UserReducer } from 'entities/User'
import { LoginReducer } from 'features/AuthByUsername'



export const createReduxStore = (initialState?: StateSchema) => {

    const rootReducers: ReducersMapObject<StateSchema> = {
        counter: CounterReducer, user: UserReducer, loginForm: LoginReducer
    }

    return configureStore<StateSchema>({
        reducer: rootReducers,
        devTools: __IS_DEV_,
        preloadedState: initialState
    })
}
