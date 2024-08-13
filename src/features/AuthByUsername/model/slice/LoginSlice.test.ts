import { LoginSchema } from "../types/LoginSchema"
import { LoginActions, LoginReducer } from "./loginSlice"

describe('login slice', ()=>{
    test('set username', ()=>{
        const state: DeepPartial<LoginSchema> = {username: 'admin'}
        expect(LoginReducer(state as LoginSchema, LoginActions.setUsername('admin'))).toEqual({username: 'admin'})
    })
    test('set password', ()=>{
        const state: DeepPartial<LoginSchema> = {password: '123'}
        expect(LoginReducer(state as LoginSchema, LoginActions.setPassword('123'))).toEqual({password: '123'})
    })
})