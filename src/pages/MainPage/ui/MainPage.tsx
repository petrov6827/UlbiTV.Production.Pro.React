import { useTranslation } from "react-i18next"

const MyComponent = () => {
    const {t, i18n} = useTranslation();

    console.log(t);

    const useRus = () => {
        i18n.changeLanguage('ru')
    }
    const useEng = () => {
        i18n.changeLanguage('en')
    }
    
    return <div><button onClick={useRus}>RU</button><button onClick={useEng}>EN</button>{t('Перевод')}</div>
}

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