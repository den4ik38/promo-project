import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/store";
import i18n from "shared/config/i18n/i18n";
import { Profile } from "../types/profile";
import { TFunctionResult } from "i18next";


export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<TFunctionResult>>(
    'profile/fetchProfileData',
    async (_, {rejectWithValue, extra}) => {
        try {
            const response = await extra.api.get<Profile>('/profile')
            if (!response.data) {
                throw new Error
            }
            
            return response.data
            
        } catch (e) {
            console.log(e);          
            return rejectWithValue(i18n.t('Profile data loading exit with error'))
        }
        
    },
)