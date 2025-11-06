import { getLocale, getTranslations } from "next-intl/server";

import AnimalsCategory from "@/components/page-animals-category/animalsCategory/AnimalsCategory";

import { fetchApi } from "@/lib/api";

export default async function AnimalsCategoryPage({ params }) {
  const { category } = await params;

  const locale = await getLocale();
  const t = await getTranslations({ locale });

  let title = "Category Title";
  let btnMoreTitle = "More Category Items";

  switch (category) {
    case "cats":
      title = t("cat-page.title");
      btnMoreTitle = t("buttons.more-cats");
      break;

    case "dogs":
      title = t("dog-page.title");
      btnMoreTitle = t("buttons.more-dogs");
      break;

    default:
      break;
  }

  //creaated filter key for get filtered request from Strappi
  const filterKey = "filters[category][$eq]";

  try {
    const jsonResponse = await fetchApi("/dogs", {
      locale: locale,
      populate: "*",
      [filterKey]: category,
    });

    const animals = jsonResponse.data;

    return (
      <AnimalsCategory
        title={title}
        btnMoreTitle={btnMoreTitle}
        data={animals}
      />
    );
  } catch {
    console.error(`Ошибка при загрузке категории ${category}:`, error);
    return (
      <section>
        <h1>{title}</h1>

        {
          //TO DO use mokap if data not find
        }
        <p>Не удалось загрузить список животных. Попробуйте позже.</p>
      </section>
    );
  }
}
