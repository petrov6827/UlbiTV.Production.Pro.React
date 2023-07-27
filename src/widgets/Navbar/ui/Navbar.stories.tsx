// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './Navbar';
import { ThemeDecorator } from "shared/config/storybook/decorators/themeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';

const meta: Meta<typeof Navbar> = {component: Navbar};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Light: Story = {};
Light.decorators = [StoreDecorator({})]

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)]