import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LoginSchema } from '../types/LoginSchema'
import { LoginByUsername } from '../services/LoginByUsername/LoginByUsername'

const initialState: LoginSchema = {
    username: '',
    password: '',
    isLoading: false,
    error: undefined
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(LoginByUsername.pending, (state) => {
                state.isLoading = true
                state.error = undefined
            })
            .addCase(LoginByUsername.fulfilled, (state, action) => {
                state.isLoading = false
            })
            .addCase(LoginByUsername.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

// Action creators are generated for each case reducer function
export const { actions: LoginActions } = loginSlice
export const { reducer: LoginReducer } = loginSlice
