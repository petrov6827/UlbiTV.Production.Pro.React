import { useTranslation } from "react-i18next"

const MainPage = () => {
  const {t, i18n} = useTranslation();

  return (
    <div>
      {t('Главная страница')}
      {/* <MyComponent /> */}
    </div>
  )
}

export default MainPage