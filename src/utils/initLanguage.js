import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import am from "../translation/am";
import en from "../translation/en";
import ru from "../translation/ru";

const langs = {
  ru: "ru",
  en: "en",
  hy: "am",
};

const lg = window.navigator.userLanguage || window.navigator.language;
const userLanguage = (langs[lg] || lg).split("-")[0] || langs.ru;

let urlLanguage;

if (window.location.href.includes("/#/")) {
  [, urlLanguage = ""] = window.location.hash.split("/");
  urlLanguage = urlLanguage.slice(0, 2);
} else {
  [, urlLanguage] = window.location.pathname.split("/");
}

if (!urlLanguage) {
  // window.history.pushState({}, null, `${userLanguage}`);
}

const resources = {
  am: { translation: am },
  en: { translation: en },
  ru: { translation: ru },
};

export default () => {
  i18n.use(initReactI18next).init({
    resources,
    lng: urlLanguage || userLanguage,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });
};
