import AnimalDetails from "@/components/page-animal/animalDetails/AnimalDetails";
import { notFound } from "next/navigation";

import "./page.scss";

export default async function AnimalPage({ params }) {
  const { slug, category } = await params;

  //Get request to server and take data
  //used filters is Search this is option of Strapi for filter collection

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  try {
    const res = await fetch(
      `${API_URL}/dogs?filters[slug][$eq]=${slug}&filters[category][$eq]=${category}&populate=moreImg`,
      {
        cache: "no-store",
      }
    );
    if (!res.ok) {
      throw new Error("data is fail");
    }

    //Change format of data
    const { data } = await res.json();

    //search current animal
    const animal = data[0];

    if (!animal) {
      notFound();
    }

    return <AnimalDetails animal={animal} />;
  } catch (e) {
    console.error(e.message);
    notFound();
  }
}
