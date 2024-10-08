/* eslint-disable */
import { Story } from '@storybook/react';
import '../../../app/styles/index.scss';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema, StoreProvider } from 'app/providers/store';
import { LoginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { ProfileReducer } from 'entities/Profile';

const asyncDefaultReducers: DeepPartial<ReducersMapObject<StateSchema>> = {loginForm: LoginReducer, profile: ProfileReducer}

// eslint-disable-next-line react/display-name
export const StoreDecorator = (initialState: DeepPartial<StateSchema>, 
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>) => (StoryComponent: Story) => (
    <StoreProvider 
        initialState={initialState} 
        asyncReducers={{...asyncDefaultReducers, ...asyncReducers}}>
        <StoryComponent />
    </StoreProvider>
)