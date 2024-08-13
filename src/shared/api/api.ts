import axios from "axios";
import { LOCAL_STORAGE_USER_AUTH } from "shared/constants/constans";

export const $api = axios.create({
    baseURL: __API_,
    headers: {
        authorization: localStorage.getItem(LOCAL_STORAGE_USER_AUTH) || false
    }
})