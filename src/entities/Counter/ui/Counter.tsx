import { Button } from "shared/ui/Button/Button"

export const Counter = () => {

	const increm = () => {}
	const decrem = () => {}

	return (
		<div>
			<h1>value</h1>
			<Button onClick={increm}>
            in
			</Button>
			<Button onClick={decrem}>
            de
			</Button>
		</div>
	)
}