import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import 'app/styles/index.scss'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/theme';
import { AppSelect } from './AppSelect';



export default {
    title: 'shared/AppSelect',
    component: AppSelect,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AppSelect>;

const Template: ComponentStory<typeof AppSelect> = (args) => <AppSelect {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Укажите значение',
    options: [{value: '123', content: '123'},{value: '1234', content: '1234'}]
}

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    label: 'Укажите значение',
    options: [{value: '123', content: '123'},{value: '1234', content: '1234'}]
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]