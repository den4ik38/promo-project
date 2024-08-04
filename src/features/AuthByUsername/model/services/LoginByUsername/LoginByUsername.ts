import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";
import { User, UserActions } from "entities/User"
import i18n from "shared/config/i18n/i18n";
import { LOCAL_STORAGE_USER_AUTH } from "shared/constants/constans";

export interface LoginByUsernameProps {
  username: string;
  password: string;  
}

export const LoginByUsername = createAsyncThunk<User, LoginByUsernameProps, {rejectValue: string}>(
    'features/LoginByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post<User>('http://localhost:8000/login', authData)
            if (!response.data) {
                throw new Error
            }
            localStorage.setItem(LOCAL_STORAGE_USER_AUTH, JSON.stringify(response.data))
            thunkAPI.dispatch(UserActions.setAuthData(response.data))
            return response.data
        } catch (e) {
            console.log(e);          
            return thunkAPI.rejectWithValue(i18n.t('Incorrect password or username'))
        }
        
    },
)