import type { PayloadAction} from "@reduxjs/toolkit";
import { createSlice} from "@reduxjs/toolkit";
import type { LoginSchema } from "../ types/LoginSchema";

const initialState: LoginSchema = {
	isLoading: false,
	username: '',
	password: ''
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUsername: (state, action: PayloadAction<string>) => {
			state.username = action.payload
		},
		setPassword: (state, action: PayloadAction<string>) => {
			state.password = action.payload
		}
	}
})

export const {actions: userActions} = userSlice
export const {reducer: userReducer} = userSlice