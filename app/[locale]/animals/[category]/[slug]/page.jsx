import AnimalDetails from "@/components/page-animal/animalDetails/AnimalDetails";

import "./page.scss";

export default async function AnimalPage({ params }) {
  const { slug } = await params;

  //Get request to server and take data
  //used filters is Search this is option of Strapi for filter collection
  const res = await fetch(
    `http://localhost:1337/api/dogs?filters[slug][$eq]=${slug}&populate=moreImg`,
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

  return <AnimalDetails animal={animal} />;
}
