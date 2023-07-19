import { Counter } from "entities/Counter";
import { useTranslation } from "react-i18next"

const MainPage = () => {
	const {t} = useTranslation();

	return (
		<div>
			{t('Главная страница')}
			<Counter />
			{/* <MyComponent /> */}
		</div>
	)
}

export default MainPage