// import { useTranslation } from "react-i18next";
import "./changeLng.scss";

import React from "react";

const ChangeLng = () => {
  const { i18n } = useTranslation();

  const locales = {
    uk: {
      title: "UA",
    },
    en: {
      title: "EN",
    },
  };

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className="language_toggle">
      {i18n.resolvedLanguage}
      <select onChange={handleLanguageChange} value={i18n.resolvedLanguage}>
        {Object.keys(locales).map((locale) => (
          <option key={locale} value={locale}>
            {locales[locale].title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ChangeLng;
