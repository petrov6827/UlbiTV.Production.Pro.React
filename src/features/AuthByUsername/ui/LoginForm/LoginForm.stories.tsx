import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import LoginFormAsync from './LoginForm.async';

const meta: Meta<typeof LoginFormAsync> = {
	component: LoginFormAsync,
};

export default meta;
type Story = StoryObj<typeof LoginFormAsync>;

export const Primary: Story = {args: {}};
Primary.decorators = [StoreDecorator({
	loginForm: { username: '123', password: 'asd' }
})]

export const Error: Story = {args: {}};
Error.decorators = [StoreDecorator({
	loginForm: { username: '123', password: 'asd', error: 'error 404' }
})]

export const Loading: Story = {args: {}};
Loading.decorators = [StoreDecorator({
	loginForm: { username: '123', password: 'asd', isLoading: true }
})]
