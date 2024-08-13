import axios from 'axios';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { UpdateProfileData } from './UpdateProfileData';
import { ValidatesErrors } from '../types/profile';

const data = {
    first: "Denis",
    lastname: "Reznikov",
    age: 35,
    currency: Currency.RUB,
    country: Country.Russia,
    city: "Irkutsk",
    username: "admin"
}

describe('UpdateProfileData tests', ()=>{
    test('succes update', async ()=>{
        const thunk = new TestAsyncThunk(UpdateProfileData, {
            profile: {
                form: data
            }
        })
        thunk.api.put.mockReturnValue(Promise.resolve({data: data}))
        const result = await thunk.callThunk()

        expect(thunk.api.put).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(data)
    })
    test('no data', async ()=>{
        const thunk = new TestAsyncThunk(UpdateProfileData)
        thunk.api.put.mockReturnValue(Promise.resolve(undefined))
        const result = await thunk.callThunk()

        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toEqual([ValidatesErrors.NO_DATA])
    })
    test('incorrect state', async ()=>{
        const thunk = new TestAsyncThunk(UpdateProfileData, {
            profile: {
                form: {...data, first: ''}
            }
        })
        thunk.api.put.mockReturnValue(Promise.resolve(data))
        const result = await thunk.callThunk()

        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toEqual([ValidatesErrors.INCORRECT_NAME])
    })
    test('no server answer', async ()=>{
        const thunk = new TestAsyncThunk(UpdateProfileData, {
            profile: {
                form: data
            }
        })
        thunk.api.put.mockReturnValue(Promise.resolve({status: 403}))
        const result = await thunk.callThunk()

        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toEqual([ValidatesErrors.SERVER_ERROR])
    })
})