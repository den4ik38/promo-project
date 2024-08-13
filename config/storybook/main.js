module.exports = {
    "stories": [
        "../../src/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    "addons": [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
    ],
    "typescript": {
        "reactDocgen": 'react-docgen-typescript-plugin'
    },
    "framework": "@storybook/react",
    "core": {
        "builder": "webpack5",
    },
    "staticDirs": [ "../../public" ],
};