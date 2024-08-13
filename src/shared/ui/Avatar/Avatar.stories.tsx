import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import 'app/styles/index.scss'
import { Avatar } from './Avatar';
import AvatarImg from './ava.jpg'

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const DefaultSize = Template.bind({});
DefaultSize.args = {
    src: AvatarImg,
}
export const Small = Template.bind({});
Small.args = {
    src: AvatarImg,
    size: 50
}
