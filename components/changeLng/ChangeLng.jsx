"use client";

import { useParams } from "next/navigation";

import { useLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { usePathname, useRouter } from "@/i18n/routing";

import "./changeLng.scss";

const ChangeLng = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();

  // Toggle the locale
  const handleLanguageChange = (evt) => {
    router.push(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      { pathname, params },
      { locale: evt.target.value }
    );
  };

  return (
    <div className="language_toggle">
      <select onChange={handleLanguageChange} value={locale}>
        {routing.locales.map((l) => (
          <option key={l} value={l}>
            {l === "uk" ? "ua" : l}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ChangeLng;
