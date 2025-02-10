// https://github.com/amannn/next-intl/blob/main/examples/example-app-router/src/app/%5Blocale%5D/layout.tsx
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

import BaseLayout from "@/app/_components/base/BaseLayout";

export async function generateMetadata({ params }) {
  const { locale } = await params;

  const t = await getTranslations({ locale, namespace: "LocaleLayout" });

  return {
    title: {
      template: `%s | ${t("title")}`,
      default: t("title"), // a default is required when creating a template
    },
    description: t("description"),
  };
}

export default async function LocaleLayout({ children, params }) {
  // Locale
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  return <BaseLayout locale={locale}>{children}</BaseLayout>;
}
