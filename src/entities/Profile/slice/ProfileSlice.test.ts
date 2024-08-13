import { Country } from "entities/Country"
import { ProfileSchema, ValidatesErrors } from "../types/profile"
import { ProfileActions, ProfileReducer } from "./ProfileSlice"
import { Currency } from "entities/Currency"
import { UpdateProfileData } from "../services/UpdateProfileData"

const data = {
    first: "Denis",
    lastname: "Reznikov",
    age: 35,
    currency: Currency.RUB,
    country: Country.Russia,
    city: "Irkutsk",
    username: "admin"
}

describe('Profile slice', ()=>{
    test('set updateProfile', ()=>{
        const state: DeepPartial<ProfileSchema> = {form: {first: '123'}}
        expect(ProfileReducer(state as ProfileSchema, ProfileActions.updateProfile({first: '123456'}))).toEqual({form: {first: '123456'}})
    })
    test('set setReadOnly', ()=>{
        const state: DeepPartial<ProfileSchema> = {readOnly: true}
        expect(ProfileReducer(state as ProfileSchema, ProfileActions.setReadOnly(false))).toEqual({readOnly: false})
    })
    test('set cancel edit', ()=>{
        const state: DeepPartial<ProfileSchema> = {data, form: {first: '123'}}
        expect(ProfileReducer(state as ProfileSchema, ProfileActions.cancelUpdateProfileData()))
            .toEqual({data, readOnly: true, validatesErrors: [], form: data})
    })
    test('set updateProfileData pending ', ()=>{
        const state: DeepPartial<ProfileSchema> = {isLoading: false, validatesErrors: [ValidatesErrors.INCORRECT_AGE]}
        expect(ProfileReducer(state as ProfileSchema, UpdateProfileData.pending))
            .toEqual({isLoading: true, validatesErrors: undefined})
    })
    test('set updateProfileData fullfiled ', ()=>{
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
            data: {...data, first: '123'},
            form: {...data, first: '123'},
            readOnly: false,
            validatesErrors: [ValidatesErrors.INCORRECT_AGE]
        }
        expect(ProfileReducer(state as ProfileSchema, UpdateProfileData.fulfilled(data, '')))
            .toEqual({
                isLoading: false,
                data: data,
                form: data,
                readOnly: true,
                validatesErrors: undefined
            })
    })

})