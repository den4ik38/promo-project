import { TFunctionResult } from "i18next";

export interface LoginSchema {
  username: string;
  password: string;
  isLoading: boolean;
  error: TFunctionResult;
}