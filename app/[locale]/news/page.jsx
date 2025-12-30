import { getTranslations } from "next-intl/server";

import NewsList from "@/components/page-news/newsListItem/NewsListItem";
import { fetchApi } from "@/lib/api";

import "./page.scss";

export default async function NewsListPage({ params }) {
  const { locale } = await params;
  const t = await getTranslations("news");

  const newsData = await fetchApi("/news-posts", { locale, populate: "cover" });

  return (
    <section className="news">
      <h2 className="news__title h2">{t("title")}</h2>

      <NewsList list={newsData.data} />
    </section>
  );
}
