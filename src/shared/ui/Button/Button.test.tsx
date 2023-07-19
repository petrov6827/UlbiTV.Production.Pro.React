import { render, screen } from "@testing-library/react";
import { Button, ButtonTheme } from "./Button";

describe('classNames', () => {

	test('test Btn', () => {
		render(<Button>test Btn</Button>);
		expect(screen.getByText('test Btn')).toBeInTheDocument();
	})

	test('test Btn', () => {
		render(<Button theme={ButtonTheme.CLEAR}>test Btn</Button>);
		expect(screen.getByText('test Btn')).toHaveClass('clear');
		// screen.debug()
	})

	test('test Btn', () => {
		render(<Button theme={ButtonTheme.OUTLINE}>test Btn</Button>);
		expect(screen.getByText('test Btn')).toHaveClass('outline');
		// screen.debug()
	})
})