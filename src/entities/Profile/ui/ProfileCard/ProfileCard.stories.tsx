import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import 'app/styles/index.scss'
import { ProfileCard } from './ProfileCard';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import avatar from 'shared/assets/test/ava.jpg'

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const FullCard = Template.bind({});
FullCard.args = {
    data: {
        first: "Denis",
        lastname: "Reznikov",
        age: 35,
        currency: Currency.RUB,
        country: Country.Russia,
        city: "Irkutsk",
        username: "admin",
        avatar
    }
}

export const ErorrCard = Template.bind({});
ErorrCard.args = {
    error: 'true'
}

export const IsLoadingCard = Template.bind({});
IsLoadingCard.args = {
    isLoading: true
}