// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from './Sidebar';
import { ThemeDecorator } from "shared/config/storybook/decorators/themeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof Sidebar> = {component: Sidebar};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {};
export const Dark: Story = {};

Dark.decorators = [ThemeDecorator(Theme.DARK)]