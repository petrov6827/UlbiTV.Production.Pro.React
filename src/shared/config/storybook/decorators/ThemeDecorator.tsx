import { StoryFn } from "@storybook/react";
import { Theme, ThemeProvider } from "app/providers/ThemeProvider";

export const ThemeDecorator=(theme:Theme) => (StoryComponent: StoryFn) => {
	return (
		<ThemeProvider>
			<div className={`app ${theme}`}>
				{/* <div className={`${theme}`}> */}
				<StoryComponent/>
			</div>
		</ThemeProvider>
	)
};