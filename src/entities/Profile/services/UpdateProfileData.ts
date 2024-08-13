import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/store";
import i18n from "shared/config/i18n/i18n";
import { Profile, ValidatesErrors } from "../types/profile";
import { getProfileForm } from "../selectors/getProfileForm/getProfileForm";
import { validadteProfileForm } from "./validadteProfileForm";


export const UpdateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidatesErrors[]>>(
    'profile/UpdateProfileData',
    async (_, {rejectWithValue, getState, extra}) => {
        const formData = getProfileForm(getState())
        const errors = validadteProfileForm(formData)
        
        if (errors.length) {
            return rejectWithValue(errors)
        }
        try {
            const response = await extra.api.put<Profile>('/profile', formData)
            if (!response.data) {
                throw new Error()
            }
            
            return response.data
        } catch (e) {
            console.log(e);          
            return rejectWithValue([ValidatesErrors.SERVER_ERROR])
        }
        
    },
)