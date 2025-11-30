import { getLocale } from "next-intl/server";
import NotFoundContainer from "@/components/page-not-found/NotFoundContainer";

export const dynamic = "force-dynamic";

export default async function LocalNotFound() {
  const locale = await getLocale();

  return <NotFoundContainer locale={locale} />;
}
