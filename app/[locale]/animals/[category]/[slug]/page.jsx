import AnimalDetails from "@/components/animalDetails/AnimalDetails";

import animals from "@/data/catsDB";

import "./page.scss";

export default async function AnimalPage({ params }) {
  const { slug } = await params;

  // TO DO: Get animal data from API
  const animal = animals.find((animal) => animal.slug === slug);

  return <AnimalDetails animal={animal} />;
}
