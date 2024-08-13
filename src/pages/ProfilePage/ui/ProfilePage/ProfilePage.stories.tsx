import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/theme';
import ProfilePage from './ProfilePage';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import avatar  from 'shared/assets/test/ava.jpg'

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Light = Template.bind({});
Light.args = {
}
Light.decorators = [StoreDecorator({
    profile: {
        form: {
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
})]
export const Dark = Template.bind({});
Dark.args = {
}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        form: {
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
})]