import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { ThemeDecorator } from "shared/config/storybook/decorators/themeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof Button> = {
	component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	args: {
		children: "Text",
	},
};

export const Clear: Story = {
	args: {
		children: "Text",
		theme: ButtonTheme.CLEAR
	},
};

export const Outline: Story = {
	args: {
		children: "Text",
		theme: ButtonTheme.OUTLINE
	},
};

export const OutlineDark: Story = {
	args: {
		children: "Text",
		theme: ButtonTheme.OUTLINE
	},
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Background: Story = {
	args: {
		children: "Text",
		theme: ButtonTheme.BACKGROUND
	},
};

export const BackgroundInverted: Story = {
	args: {
		children: "Text",
		theme: ButtonTheme.BACKGROUND_INVERTED
	},
};

export const SquareSizeM:Story = {
	args: {
		children: '>',
		theme: ButtonTheme.BACKGROUND_INVERTED,
		square: true,
		size: ButtonSize.M
	}
}
export const SquareSizeL:Story = {
	args: {
		children: '>',
		theme: ButtonTheme.BACKGROUND_INVERTED,
		square: true,
		size: ButtonSize.L
	}
}
export const SquareSizeXL:Story = {
	args: {
		children: '>',
		theme: ButtonTheme.BACKGROUND_INVERTED,
		square: true,
		size: ButtonSize.XL
	}
}

// export const OutlinedSizeL = Template.bind({});
// OutlinedSizeL.args = {
// 	children: "Text",
// 	theme: ButtonTheme.OUTLINE,
// 	size: ButtonSize.L
// };
// export const OutlinedSizeXL = Template.bind({});
// OutlinedSizeXL.args = {
// 	children: "Text",
// 	theme: ButtonTheme.OUTLINE,
// 	size: ButtonSize.XL
// };
// export const Disabled = Template.bind({});
// Disabled.args = {
// 	children: "Text",
// 	theme: ButtonTheme.OUTLINE,
// 	disabled:true
// };

