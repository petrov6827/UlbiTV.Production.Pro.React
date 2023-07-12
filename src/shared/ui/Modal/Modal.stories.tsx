import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/decorators/themeDecorator';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
	component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
	args: {
		isOpen: true,
		children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque fugit incidunt illo labore explicabo ipsam asperiores dignissimos nesciunt ipsum! At architecto autem alias rem dolore molestias quae doloribus praesentium dignissimos!",
	},
};
export const Dark: Story = {
	args: {
		isOpen: true,
		children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque fugit incidunt illo labore explicabo ipsam asperiores dignissimos nesciunt ipsum! At architecto autem alias rem dolore molestias quae doloribus praesentium dignissimos!",
	},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)]
