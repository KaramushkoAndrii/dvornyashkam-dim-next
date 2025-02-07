import AnimalsCategory from "@/app/_components/animalsCategory/AnimalsCategory";

import catsDB from "@/app/_data/catsDB";

import "./page.scss";

export default function AnimalsCategoryPage({ params }) {
  const { t } = { t: (x) => x }; // useTranslation();

  let title = "Category Title";
  let btnMoreTitle = "More Category Items";

  switch (params?.category) {
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
    <div className="animals-category-page">
      <AnimalsCategory
        title={title}
        btnMoreTitle={btnMoreTitle}
        data={catsDB}
      />
    </div>
  );
}
