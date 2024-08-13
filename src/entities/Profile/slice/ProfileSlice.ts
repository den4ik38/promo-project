import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Profile, ProfileSchema } from '../types/profile'
import { fetchProfileData } from '../services/fetchProfileData'
import { UpdateProfileData } from '../services/UpdateProfileData'

const initialState: ProfileSchema = {
    data: undefined,
    error: undefined,
    isLoading: false,
    readOnly: true
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setReadOnly: (state, action: PayloadAction<boolean>) => {
            state.readOnly = action.payload
        },
        updateProfile: (state, action: PayloadAction<Profile>) => {
            state.form = {
                ...state.form,
                ...action.payload
            }
        },
        cancelUpdateProfileData: (state) => {
            state.readOnly = true
            state.form = state.data
            state.validatesErrors = []
        },
        
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.isLoading = true
                state.error = undefined
            })
            .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.isLoading = false;
                state.data = action.payload
                state.form = action.payload
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })

            .addCase(UpdateProfileData.pending, (state) => {
                state.isLoading = true
                state.validatesErrors = undefined
            })
            .addCase(UpdateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.isLoading = false;
                state.data = action.payload
                state.form = action.payload
                state.readOnly = true;
                state.validatesErrors = undefined
            })
            .addCase(UpdateProfileData.rejected, (state, action) => {
                state.isLoading = false
                state.validatesErrors = action.payload
            })
    },
})

// Action creators are generated for each case reducer function
export const { actions: ProfileActions } = profileSlice
export const { reducer: ProfileReducer } = profileSlice
