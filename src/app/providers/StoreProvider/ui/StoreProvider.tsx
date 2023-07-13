import type { FC, ReactNode } from 'react'
import { Provider } from 'react-redux';

interface StoreProviderProps {
    children: ReactNode;
}

export const StoreProvider: FC<StoreProviderProps> = (props) => {
	const { children } = props;

	return (
		<Provider store={}>
			{children}
		</Provider>
	)
}