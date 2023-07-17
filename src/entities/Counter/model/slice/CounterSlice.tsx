import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
	name: 'counter',
	initialState: {
		value: 0
	},
	reducers: {
		increment: state => {
			state.value += 1
		},
		decrement: state => {
			state.value -= 1
		},
	}
})

// Action creators are generated for each case reducer function
export const { actions: counterActions } = counterSlice
export const { reducer: counterReducer } = counterSlice

export default counterSlice.reducer