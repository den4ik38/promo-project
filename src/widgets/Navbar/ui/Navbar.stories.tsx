import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import 'app/styles/index.scss'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/theme';
import { Navbar } from './Navbar';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

export default {
    title: 'widgets/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.args = {
}
Light.decorators = [StoreDecorator({
    user: {}
})]
export const Dark = Template.bind({});
Dark.args = {
}

Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    user: {}
})]

export const LightAuth= Template.bind({});
LightAuth.args = {
}
LightAuth.decorators = [StoreDecorator({
    user: {authData: {}}
})]
export const DarkAuth = Template.bind({});
DarkAuth.args = {
}

DarkAuth.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    user: {authData: {}}
})]
