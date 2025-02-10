// TO DO: i18n https://next-intl.dev/docs/getting-started/app-router/with-i18n-routing
// Video Instruction: https://www.youtube.com/watch?v=2Jh9olZXBfw (not checked yet)
import { useTranslations } from "next-intl";

import "./changeLng.scss";

const ChangeLng = () => {
  // TO DO: i18n https://next-intl.dev/docs/getting-started/app-router/with-i18n-routing
  const { i18n } = {
    i18n: { resolvedLanguage: "uk", changeLanguage: (x) => x },
  }; // useTranslation();

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
