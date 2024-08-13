import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import 'app/styles/index.scss'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/theme';
import { Sidebar } from './Sidebar';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

export default {
    title: 'widgets/Sidebar',
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

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

export const DarkLogin = Template.bind({});
DarkLogin.args = {
}

DarkLogin.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    user: {
        authData: {}
    }
})]