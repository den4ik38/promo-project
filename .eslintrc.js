module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    extends: ['plugin:react/recommended', 'plugin:i18next/recommended', 'plugin:react-hooks/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        "i18next"
    ],
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'indent': [2, 4],
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error",
        'react/jsx-filename-extension': [
            2,
            { extensions: ['.js', '.jsx', '.tsx'] },
        ],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": [
            "warn",
            { "argsIgnorePattern": "^_" }
        ],
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'max-len': ['error', { ignoreComments: true, code: 140 }],
        'react/no-deprecated': 'warn',
        'i18next/no-literal-string': ['error', {markupOnly: true, "ignoreAttribute": ['to', 'data-testid', 'name']}],
        'react/display-name': 'off',
        'no-undef': 'off'
    },
    globals: {
        __IS_DEV__: true,
        __API_: true,
        __PROJECT_: true
    },
    overrides: [
        {
            files: ['**/src/**/*.test.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string':'off'
            }
        },
        {
            files: ['**/src/**/*.stories.{ts,tsx}'],
            rules: {
                'react/jsx-props-no-spreading': 'off',
            }
        }
    ]
};
