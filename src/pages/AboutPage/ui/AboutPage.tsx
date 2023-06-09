import { useTranslation } from "react-i18next";

const AboutPage = () => {
    const {t, i18n} = useTranslation();
    
    return <div>{t('О сайте')}</div>
}

export default AboutPage