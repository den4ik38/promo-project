import { addDecorator } from "@storybook/react";
import {RouterDecorator} from '../../src/shared/config/storybook/RouterDecorator'
import {StyleDecorator} from '../../src/shared/config/storybook/StyleDecorator'
import {ThemeDecorator} from '../../src/shared/config/storybook/ThemeDecorator'
import {TranslationDecorator} from '../../src/shared/config/storybook/TranslationDecorator'
import {Theme} from'../../src/app/providers/theme/index'
export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

export const globalTypes = {
    locale: {
        name: 'Locale',
        description: 'Internationalization locale',
        toolbar: {
            icon: 'globe',
            items: [
                { value: 'ru', title: 'Русский' },
                { value: 'en', title: 'English' },
            ],
        },
    },
};

addDecorator(StyleDecorator)
addDecorator(TranslationDecorator)
addDecorator(ThemeDecorator(Theme.LIGHT))
addDecorator(RouterDecorator)
