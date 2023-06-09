import { changeLanguage } from "i18next";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
// import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Button } from "shared/ui/Button/Button";


interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = () => {
  const {t, i18n} = useTranslation();

    console.log(t);

    const useRus = () => {
        i18n.changeLanguage('ru')
    }
    const useEng = () => {
        i18n.changeLanguage('en')
    }
    
    return <div><Button onClick={useRus}>RU</Button><Button onClick={useEng}>EN</Button></div>

};
