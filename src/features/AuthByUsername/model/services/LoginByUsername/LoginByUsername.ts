import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/store";
import { User, UserActions } from "entities/User"
import { TFunctionResult } from "i18next";
import i18n from "shared/config/i18n/i18n";
import { LOCAL_STORAGE_USER_AUTH } from "shared/constants/constans";

export interface LoginByUsernameProps {
  username: string;
  password: string;  
}

export const LoginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<TFunctionResult>>(
    'features/LoginByUsername',
    async (authData, {dispatch, rejectWithValue, extra}) => {
        try {
            const response = await extra.api.post<User>('/login', authData)
            if (!response.data) {
                throw new Error
            }
            localStorage.setItem(LOCAL_STORAGE_USER_AUTH, JSON.stringify(response.data))
            dispatch(UserActions.setAuthData(response.data))
            return response.data
        } catch (e) {
            console.log(e);          
            return rejectWithValue(i18n.t('Incorrect password or username'))
        }
        
    },
)