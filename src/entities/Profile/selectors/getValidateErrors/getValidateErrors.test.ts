import { StateSchema } from "app/providers/store"
import { getValidateErrors } from "./getValidateErrors"
import { ValidatesErrors } from "entities/Profile/types/profile"

const validatesErrors = [
    ValidatesErrors.NO_DATA,
    ValidatesErrors.INCORRECT_NAME
]
describe('getValidateErrors', ()=>{
    test('with data', ()=>{
        const state: DeepPartial<StateSchema> = {profile : {validatesErrors}}
        expect(getValidateErrors(state as StateSchema)).toEqual(validatesErrors)
    })
    test('with empty state', ()=>{
        const state: DeepPartial<StateSchema> = {}
        expect(getValidateErrors(state as StateSchema)).toEqual(undefined)
    })
})