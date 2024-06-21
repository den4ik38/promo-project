import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AppButton, ButtonSize, ButtonTheme } from './AppButton';
import 'app/styles/index.scss'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/theme';

export default {
    title: 'shared/Button',
    component: AppButton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AppButton>;

const Template: ComponentStory<typeof AppButton> = (args) => <AppButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'TEXT'
}
export const Clear = Template.bind({});
Clear.args = {
    children: 'TEXT',
    theme: ButtonTheme.CLEAR
}
export const Outline = Template.bind({});
Outline.args = {
    children: 'TEXT',
    theme: ButtonTheme.OUTLINE
}
export const OutlineL = Template.bind({});
OutlineL.args = {
    children: 'TEXT',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L
}
export const OutlineXL = Template.bind({});
OutlineXL.args = {
    children: 'TEXT',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL
}
export const Background = Template.bind({});
Background.args = {
    children: 'TEXT',
    theme: ButtonTheme.BACKGROUND,
}
export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
    children: 'TEXT',
    theme: ButtonTheme.BACKGROUND_INVERTED,
}
export const ClearDark = Template.bind({});
ClearDark.args = {
    children: 'TEXT',
    theme: ButtonTheme.CLEAR
}
ClearDark.decorators = [ThemeDecorator(Theme.DARK)]
export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'TEXT',
    theme: ButtonTheme.OUTLINE
}
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]
export const Square = Template.bind({});
Square.args = {
    children: '<',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true 
}
export const SquareL = Template.bind({});
SquareL.args = {
    children: '<',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L
}
export const SquareXL = Template.bind({});
SquareXL.args = {
    children: '<',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL
}