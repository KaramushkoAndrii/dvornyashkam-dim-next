import AnimalsCategory from "@/app/_components/animalsCategory/AnimalsCategory";

import catsDB from "@/app/_data/catsDB";

import "./page.scss";

export default function AnimalsCategoryPage(props) {
  const title = "Category Title";
  const btnMoreTitle = "More Category Title";

  return (
    <div className="animals-category-page">
      {JSON.stringify(props)}

      <AnimalsCategory
        title={title}
        btnMoreTitle={btnMoreTitle}
        data={catsDB}
      />
    </div>
  );
}
