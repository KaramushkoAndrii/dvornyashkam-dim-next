import { fetchApi } from "@/lib/api";
import { notFound } from "next/navigation";
import BlockRender from "@/components/page-news/blockRender/BlockRender";

import "./page.scss";

export default async function CurrentNewsPage({ params }) {
  const { slug, locale } = await params;

  const newsPageResponse = await fetchApi("/news-posts", {
    locale,
    populate: "body.img",
    "filters[slug][$eq]": slug,
  });

  if (!newsPageResponse || newsPageResponse.data.length == 0) {
    notFound();
  }
  const post = newsPageResponse.data[0];

  return (
    <section className="news-post">
      <BlockRender blocks={post.body} />
    </section>
  );
}
