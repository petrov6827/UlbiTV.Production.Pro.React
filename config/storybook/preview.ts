import type { Preview } from "@storybook/react";
// import type { Preview } from "@storybook/react-webpack5";
import {StyleDecorator} from "../../src/shared/config/storybook/decorators/StyleDecorator";
import {ThemeDecorator} from "../../src/shared/config/storybook/decorators/themeDecorator";
import {Theme} from "../../src/app/providers/ThemeProvider/lib/ThemeContext";
import {RouterDecorator} from "../../src/shared/config/storybook/decorators/RouterDecorator";

const preview: Preview = {
	decorators: [
		ThemeDecorator(Theme.LIGHT),
		StyleDecorator,
		RouterDecorator,
	],
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
};

export default preview;
