import type { StoryFn } from "@storybook/react";
import type { Theme} from "app/providers/ThemeProvider";
import { ThemeProvider } from "app/providers/ThemeProvider";

export const ThemeDecorator= (theme:Theme) => (StoryComponent: StoryFn) => (
	<ThemeProvider initialTheme={theme}>
		<div className={`app ${theme}`}>
			{/* <div className={`${theme}`}> */}
			<StoryComponent />
		</div>
	</ThemeProvider>
);