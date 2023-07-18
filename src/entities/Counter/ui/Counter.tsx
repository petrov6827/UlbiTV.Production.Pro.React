import { useDispatch } from "react-redux"
import { Button } from "shared/ui/Button/Button"
import { counterActions } from "../model/slice/CounterSlice";

export const Counter = () => {
	const dispatch = useDispatch();

	const increment = () => {
		dispatch(counterActions.increment())
	}
	const decrement = () => {
		dispatch(counterActions.decrement())
	}

	return (
		<div>
			<h1>value = {counter}</h1>
			<Button onClick={increment}>
            in
			</Button>
			<Button onClick={decrement}>
            de
			</Button>
		</div>
	)
}