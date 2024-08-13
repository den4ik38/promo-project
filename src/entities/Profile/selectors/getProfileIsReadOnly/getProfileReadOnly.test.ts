import { StateSchema } from "app/providers/store"
import { Country } from "entities/Country"
import { Currency } from "entities/Currency"
import { getProfileReadOnly } from "./getProfileReadOnly"

const data = {
    first: "Denis",
    lastname: "Reznikov",
    age: 35,
    currency: Currency.RUB,
    country: Country.Russia,
    city: "Irkutsk",
    username: "admin"
}
describe('getProfileIsReadOnly', ()=>{
    test('with data', ()=>{
        const state: DeepPartial<StateSchema> = {profile : {readOnly: true}}
        expect(getProfileReadOnly(state as StateSchema)).toEqual(true)
    })
    test('with empty state', ()=>{
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileReadOnly(state as StateSchema)).toEqual(undefined)
    })
})