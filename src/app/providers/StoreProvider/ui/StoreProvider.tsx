import type { FC, ReactNode } from 'react'
import { Provider } from 'react-redux';
import type { StateSchema } from '../config/StateSchema';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
    children?: ReactNode;
	initialState?: StateSchema
}

export const StoreProvider = (props:StoreProviderProps) => {
	const { children } = props;

	const store = createReduxStore();

	return (
		<Provider store={store}>
			{children}
		</Provider>
	)
}