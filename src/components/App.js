import React from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Buildings from "./buildings/Buildings";
import am from "../translation/am";
import en from "../translation/en";
import ru from "../translation/ru";

const resources = {
  am: { translation: am },
  en: { translation: en },
  ru: { translation: ru },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ru",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

function App() {
  return <Buildings />;
}

export default App;
