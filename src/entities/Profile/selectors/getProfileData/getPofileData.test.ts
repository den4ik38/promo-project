import { StateSchema } from "app/providers/store"
import { Country } from "entities/Country"
import { Currency } from "entities/Currency"
import { getProfileData } from "./getProfileData"

const data = {
    first: "Denis",
    lastname: "Reznikov",
    age: 35,
    currency: Currency.RUB,
    country: Country.Russia,
    city: "Irkutsk",
    username: "admin"
}
describe('GetProfiledata', ()=>{
    test('with data', ()=>{
        const state: DeepPartial<StateSchema> = {profile : {data}}
        expect(getProfileData(state as StateSchema)).toEqual(data)
    })
    test('with empty state', ()=>{
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileData(state as StateSchema)).toEqual(undefined)
    })
})