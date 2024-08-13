import { StateSchema } from "app/providers/store"
import { Country } from "entities/Country"
import { Currency } from "entities/Currency"
import { getProfileError } from "./getProfileError"

const data = {
    first: "Denis",
    lastname: "Reznikov",
    age: 35,
    currency: Currency.RUB,
    country: Country.Russia,
    city: "Irkutsk",
    username: "admin"
}
describe('getProfileError', ()=>{
    test('with data', ()=>{
        const state: DeepPartial<StateSchema> = {profile : {error: 'error'}}
        expect(getProfileError(state as StateSchema)).toEqual('error')
    })
    test('with empty state', ()=>{
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileError(state as StateSchema)).toEqual(undefined)
    })
})