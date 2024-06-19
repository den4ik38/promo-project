import { Story } from '@storybook/react';
import '../../../app/styles/index.scss';
import { Theme } from 'app/providers/theme';

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <div className={`app ${theme}`}>
        <StoryComponent />
    </div>
)