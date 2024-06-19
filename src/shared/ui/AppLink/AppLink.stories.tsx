import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import 'app/styles/index.scss'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/theme';
import { AppLink, AppLinkTheme } from './AppLink';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/'
    }
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'LINK',
    theme: AppLinkTheme.PRIMARY
}
export const Inverted = Template.bind({});
Inverted.args = {
    children: 'LINK',
    theme: AppLinkTheme.INVERTED
}
export const Red = Template.bind({});
Red.args = {
    children: 'LINK',
    theme: AppLinkTheme.RED
}
export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'LINK',
    theme: AppLinkTheme.PRIMARY
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const InvertedDark = Template.bind({});
InvertedDark.args = {
    children: 'LINK',
    theme: AppLinkTheme.INVERTED
}
InvertedDark.decorators = [ThemeDecorator(Theme.DARK)]

export const RedDark = Template.bind({});
RedDark.args = {
    children: 'LINK',
    theme: AppLinkTheme.RED
}
RedDark.decorators = [ThemeDecorator(Theme.DARK)]
