import { Story } from '@storybook/react';
import '../../../app/styles/index.scss';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema, StoreProvider } from 'app/providers/store';

// eslint-disable-next-line react/display-name
export const StoreDecorator = (initialState: DeepPartial<StateSchema>) => (StoryComponent: Story) => (
    <StoreProvider initialState={initialState}>
        <StoryComponent />
    </StoreProvider>
)