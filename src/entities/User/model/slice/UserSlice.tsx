import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User, UserSchema } from '../types/UserSchema'
import { LOCAL_STORAGE_USER_AUTH } from 'shared/constants/constans'

const initialState: UserSchema = {
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(LOCAL_STORAGE_USER_AUTH);
            if (user) {
                state.authData = JSON.parse(user)
            }
        },
        logout: (state) => {
            localStorage.removeItem(LOCAL_STORAGE_USER_AUTH);
            state.authData = undefined
        }
    },
})

// Action creators are generated for each case reducer function
export const { actions: UserActions } = userSlice
export const { reducer: UserReducer } = userSlice
