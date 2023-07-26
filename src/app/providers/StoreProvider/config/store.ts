import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
import type { ReducersMapObject } from '@reduxjs/toolkit';
import type { StateSchema } from './StateSchema'
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';

export function createReduxStore(initialState?: StateSchema) {
	const rootReducers: ReducersMapObject<StateSchema> = {
		counter: counterReducer,
		user: userReducer,
		loginForm: loginReducer
	}

	return configureStore<StateSchema>({
		reducer: rootReducers,
		devTools: __IS_DEV__,
		preloadedState: initialState
	})
}