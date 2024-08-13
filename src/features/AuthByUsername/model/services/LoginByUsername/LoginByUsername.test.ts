import axios from 'axios';
import { LoginByUsername } from './LoginByUsername';
import { UserActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk';


const userValue = {username: '123', id: '1'}



describe('Login by username tests', ()=>{
    test('succes login', async ()=>{
        const thunk = new TestAsyncThunk(LoginByUsername)
        thunk.api.post.mockReturnValue(Promise.resolve({data: userValue}))
        const result = await thunk.callThunk({username: "admin", password: "123"})

        expect(thunk.dispatch).toBeCalledWith(UserActions.setAuthData(userValue))  
        expect(thunk.dispatch).toHaveBeenCalledTimes(3)
        expect(thunk.api.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled') 
    })
    test('error login', async ()=>{
        const thunk = new TestAsyncThunk(LoginByUsername)
        thunk.api.post.mockReturnValue(Promise.resolve({status: 403}))
        const result = await thunk.callThunk({username: "admin", password: "123"})

        expect(thunk.dispatch).toHaveBeenCalledTimes(2)
        expect(thunk.api.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toBe('Incorrect password or username')
    })
})