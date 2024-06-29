import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import 'app/styles/index.scss'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/theme';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Light = Template.bind({});
Light.args = {
    children: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, quas.',
    isOpen: true
}
export const Dark = Template.bind({});
Dark.args = {
    children: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, quas.',
    isOpen: true
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
