import { StateSchema } from "app/providers/store";


export const getValidateErrors = (state: StateSchema) => state?.profile?.validatesErrors;