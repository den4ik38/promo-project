import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import 'app/styles/index.scss'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/theme';
import { AuthForm } from './AuthForm';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import i18n from "shared/config/i18n/i18n";


export default {
    title: 'features/AuthForm',
    component: AuthForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AuthForm>;

const Template: ComponentStory<typeof AuthForm> = (args) => <AuthForm {...args} />;

export const Light = Template.bind({});
Light.args = {
}
Light.decorators = [StoreDecorator({
    loginForm: {username: 'admin', password: 'password'}
})]

export const Dark = Template.bind({});
Dark.args = {
}

Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    loginForm: {username: 'admin', password: 'password'}
})]


export const LightError = Template.bind({});
LightError.args = {
}
LightError.decorators = [StoreDecorator({
    loginForm: {username: 'admin', password: 'password', error: i18n.t('Incorrect password or username')}
})]

export const DarkError = Template.bind({});
DarkError.args = {
}

DarkError.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    loginForm: {username: 'admin', password: 'password', error: i18n.t('Incorrect password or username')}
})]

export const LightIsLoading = Template.bind({});
LightIsLoading.args = {
}
LightIsLoading.decorators = [StoreDecorator({
    loginForm: {isLoading: true}
})]

export const DarkIsLoading = Template.bind({});
DarkIsLoading.args = {
}

DarkIsLoading.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    loginForm: {isLoading: true}
})]