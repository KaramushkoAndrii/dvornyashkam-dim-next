import { getTranslations } from "next-intl/server";

import Link from "next/link";
import { fetchApi } from "@/lib/api";

import "./page.scss";

export default async function NewsListPage({ params }) {
  const { locale } = await params;
  const t = await getTranslations("news");

  const newsData = await fetchApi("/news-posts", { locale, populate: "cover" });

  return (
    <section className="news">
      <h2 className="news__title">{t("title")}</h2>

      <ul className="news__list">
        {newsData.data.map((post) => (
          <li key={post.id}>
            <Link href={`news/${post.slug}`}>
              <p>{post.title}</p>
              <p>{post.description}</p>
              <i>{post.published}</i>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
