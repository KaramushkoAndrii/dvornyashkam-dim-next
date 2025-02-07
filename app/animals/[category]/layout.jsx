import AnimalsCategory from "@/app/_components/animalsCategory/AnimalsCategory";

import animals from "@/app/_data/catsDB";

import "./layout.scss";

export default async function AnimalsCategoryLayout({ params, children }) {
  const { category } = await params;

  const { t } = { t: (x) => x }; // useTranslation();

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
    <div className="animals-category-layout">
      <AnimalsCategory
        title={title}
        btnMoreTitle={btnMoreTitle}
        data={animals}
      />

      {children}
    </div>
  );
}
