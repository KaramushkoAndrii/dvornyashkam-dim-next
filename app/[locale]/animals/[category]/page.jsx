import { getLocale, getTranslations } from "next-intl/server";

import AnimalsCategory from "@/components/page-animals-category/animalsCategory/AnimalsCategory";

import { fetchApi } from "@/lib/api";

// export const dynamic = "force-dynamic";

const getRangeFilters = (field, value) => {
  if (!value) return {};

  if (value.includes("+")) {
    const min = parseInt(value);
    return { [`filters[${field}][$gte]`]: min };
  }

  if (value.includes("-")) {
    const [min, max] = value.split("-").map(Number);

    if (min === 0) {
      return { [`filters[${field}][$lte]`]: max };
    }

    return {
      [`filters[${field}][$gte]`]: min,
      [`filters[${field}][$lte]`]: max,
    };
  }

  return {};
};

export default async function AnimalsCategoryPage({ params, searchParams }) {
  const { category } = await params;
  const resolvedSearchParams = await searchParams;

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

  // console.log("SEARCH PARAMS:", resolvedSearchParams);
  // console.log("VACCINE VALUE:", resolvedSearchParams.vaccine);
  // console.log("TYPE:", typeof resolvedSearchParams.vaccine);

  const strapiFilters = {
    //Base filter of category
    "filters[category][$eq]": category,
  };

  //filter gender
  if (resolvedSearchParams.gender) {
    strapiFilters["filters[gender][$eq]"] = resolvedSearchParams.gender;
  }

  //filter vaccine
  if (resolvedSearchParams.vaccine === "true") {
    strapiFilters["filters[vaccine][$eq]"] = "true";
  }

  //age filter
  if (resolvedSearchParams.age) {
    const ageFilters = getRangeFilters("age", resolvedSearchParams.age);
    Object.assign(strapiFilters, ageFilters);
  }

  //size filter
  if (resolvedSearchParams.size) {
    const sizeFilters = getRangeFilters("weight", resolvedSearchParams.size);
    Object.assign(strapiFilters, sizeFilters);
  }

  try {
    const jsonResponse = await fetchApi("/dogs", {
      locale: locale,
      populate: "*",
      ...strapiFilters,
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
