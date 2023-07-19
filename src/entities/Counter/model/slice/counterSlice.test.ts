import type { CounterSchema } from "../types/counterSchema"
import { counterActions, counterReducer } from "./CounterSlice"

describe ('counterSlice.test', () => {
	test('decrement', () => {
		const state: CounterSchema = { value: 10 }

		expect(counterReducer(
			state,
			counterActions.decrement()
		)).toEqual({value: 9})
	})
	test('increment', () => {
		const state: CounterSchema = { value: 10 }

		expect(counterReducer(
			state,
			counterActions.increment()
		)).toEqual({value: 11})
	})
})