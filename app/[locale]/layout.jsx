// https://github.com/amannn/next-intl/blob/main/examples/example-app-router/src/app/%5Blocale%5D/layout.tsx
import { notFound } from "next/navigation";
import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

import BaseLayout from "@/components/base/BaseLayout";

export async function generateMetadata() {
  const locale = await getLocale();

  const t = await getTranslations({ locale, namespace: "LocaleLayout" });

  return {
    title: {
      template: `%s | ${t("title")}`,
      default: t("title"), // a default is required when creating a template
    },
    description: t("description"),
  };
}

export default async function LocaleLayout({ children }) {
  // Locale
  const locale = await getLocale();

  // Ensure that the incoming `locale` is valid
  if (locale !== routing.defaultLocale && !routing.locales.includes(locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  return <BaseLayout locale={locale}>{children}</BaseLayout>;
}
