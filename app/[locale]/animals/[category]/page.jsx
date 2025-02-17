import { getLocale, getTranslations } from "next-intl/server";

import AnimalsCategory from "@/components/animalsCategory/AnimalsCategory";

import animals from "@/data/catsDB";

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
  return (
    <AnimalsCategory title={title} btnMoreTitle={btnMoreTitle} data={animals} />
  );
}
