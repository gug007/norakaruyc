import { useTranslation } from "react-i18next";

const langs = {
  am: "hy-AM",
  en: "en-US",
  ru: "ru",
};

const options = {
  year: "numeric",
  month: "short",
  day: "numeric",
};

const useFormatDate = () => {
  const { i18n } = useTranslation();
  return (value) => {
    if (!value) {
      return "";
    }

    const [d, m, y] = value.split("-");
    const date = new Date(y, m, d);

    return new Intl.DateTimeFormat(langs[i18n.language], options).format(date);
  };
};

export default useFormatDate;
