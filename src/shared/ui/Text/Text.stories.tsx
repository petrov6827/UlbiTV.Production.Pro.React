import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/decorators/themeDecorator';
import { Text } from './Text';
import { TextTheme } from './Text';

const meta: Meta<typeof Text> = {
	component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
	args: {
		text: 'Text',
		title: 'Title'
	},
};

export const Error: Story = {
	args: {
		text: 'Text',
		title: 'Title',
		theme: TextTheme.ERROR
	},
};

export const OnlyTitle: Story = {
	args: {
		title: 'title'
	},
};
export const OnlyText: Story = {
	args: {
		text: 'text',
	},
};
export const PrimaryDark: Story = {
	args: {
		text: 'Text',
		title: 'Title'
	},
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyTitleDark: Story = {
	args: {
		title: 'title'
	},
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyTextDark: Story = {
	args: {
		text: 'text',
	},
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)]