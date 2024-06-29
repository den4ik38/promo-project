import { Story } from '@storybook/react';
import '../../../app/styles/index.scss';
import { Theme, ThemeProvider } from 'app/providers/theme';

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    </ThemeProvider>
)