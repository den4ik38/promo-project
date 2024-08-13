import axios from 'axios';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk';
import { fetchProfileData } from './fetchProfileData';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { validadteProfileForm } from './validadteProfileForm';
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

describe('validadteProfileForm tests', ()=>{
    test('succes validadteProfileForm', async ()=>{
        const result = validadteProfileForm(data)
        expect(result).toEqual([])
    })
    test('with incorrect fist or lastname', async ()=>{
        const result = validadteProfileForm({...data, first: ''})
        expect(result).toEqual([ValidatesErrors.INCORRECT_NAME])
    })
    test('with incorrect age', async ()=>{
        const result = validadteProfileForm({...data, age: undefined})
        expect(result).toEqual([ValidatesErrors.INCORRECT_AGE])
    })
    test('with empty req', async ()=>{
        const result = validadteProfileForm(undefined)
        expect(result).toEqual([ValidatesErrors.NO_DATA])
    })

})