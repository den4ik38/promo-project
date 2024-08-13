import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { TFunctionResult } from "i18next";

export enum ValidatesErrors {
    NO_DATA = "NO_DATA",
    SERVER_ERROR = "SERVER_ERROR",
    INCORRECT_AGE = "INCORRECT_AGE",
    INCORRECT_NAME = "INCORRECT_NAME",
}

export interface ProfileSchema {
  data?: Profile;
  isLoading: boolean;
  error?: TFunctionResult;
  readOnly: boolean;
  form?: Profile;
  validatesErrors?: ValidatesErrors[];
}

export type Profile = {
  first?: string,
  lastname?: string,
  age?: number,
  currency?: Currency,
  country?: Country,
  city?: string,
  username?: string,
  avatar?: string
}