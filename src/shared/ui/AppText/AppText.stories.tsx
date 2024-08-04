import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import 'app/styles/index.scss'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/theme';
import { AppText, TextTheme } from './AppText';

export default {
    title: 'shared/AppText',
    component: AppText,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AppText>;

const Template: ComponentStory<typeof AppText> = (args) => <AppText {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Tetx Title',
    text: 'Lorem ipsum dolor sit amet.'
}
export const PrimaryErrorTheme = Template.bind({});
PrimaryErrorTheme.args = {
    title: 'Tetx Title',
    text: 'Lorem ipsum dolor sit amet.',
    theme: TextTheme.ERROR
}
export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Only Title',
}
export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'Only text',
}
export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Tetx Title',
    text: 'Lorem ipsum dolor sit amet.'
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const PrimaryErrorThemeDark = Template.bind({});
PrimaryErrorThemeDark.args = {
    title: 'Tetx Title',
    text: 'Lorem ipsum dolor sit amet.',
    theme: TextTheme.ERROR
}
PrimaryErrorThemeDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: 'Only Title',
}
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: 'Only text',
}
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)]
