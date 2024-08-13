import { StateSchema } from "app/providers/store"
import { Country } from "entities/Country"
import { Currency } from "entities/Currency"
import { getProfileIsLoading } from "./getProfileIsLoading"

const data = {
    first: "Denis",
    lastname: "Reznikov",
    age: 35,
    currency: Currency.RUB,
    country: Country.Russia,
    city: "Irkutsk",
    username: "admin"
}
describe('getProfileIsLoading', ()=>{
    test('with data', ()=>{
        const state: DeepPartial<StateSchema> = {profile : {isLoading: true}}
        expect(getProfileIsLoading(state as StateSchema)).toEqual(true)
    })
    test('with empty state', ()=>{
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileIsLoading(state as StateSchema)).toEqual(undefined)
    })
})