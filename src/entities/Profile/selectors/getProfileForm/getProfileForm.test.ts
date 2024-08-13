import { StateSchema } from "app/providers/store"
import { Country } from "entities/Country"
import { Currency } from "entities/Currency"
import { getProfileForm } from "./getProfileForm"

const data = {
    first: "Denis",
    lastname: "Reznikov",
    age: 35,
    currency: Currency.RUB,
    country: Country.Russia,
    city: "Irkutsk",
    username: "admin"
}
describe('getProfileForm', ()=>{
    test('with data', ()=>{
        const state: DeepPartial<StateSchema> = {profile : {form: data}}
        expect(getProfileForm(state as StateSchema)).toEqual(data)
    })
    test('with empty state', ()=>{
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileForm(state as StateSchema)).toEqual(undefined)
    })
})