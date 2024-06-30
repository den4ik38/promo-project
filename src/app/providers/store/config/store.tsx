import { configureStore } from '@reduxjs/toolkit'
import { StateSchema } from './StateSchema'
import { CounterReducer } from 'entities/Counter'



export const createReduxStore = (initialState?: StateSchema) => {

    return configureStore<StateSchema>({
        reducer: {
            counter: CounterReducer
        },
        devTools: __IS_DEV_,
        preloadedState: initialState
    })
}
