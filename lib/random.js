"use server";

import { fetchApi } from "./api";
export async function getRandomAnimal(locale = "uk") {
  try {
    //Get info how many animals we have
    const metaResponse = await fetchApi("/dogs", {
      locale: locale,
      "pagination[pageSize]": 1,
      "fields[0]": "id",
    });

    const total = metaResponse.meta?.pagination.total || 0;

    if (total === 0) {
      return null;
    }

    //create random number
    const randomOffset = Math.floor(Math.random() * total);

    //get one random animal
    const animalsResponse = await fetchApi("/dogs", {
      locale: locale,
      populate: ["img", "moreImg"],
      "pagination[start]": randomOffset,
      "pagination[limit]": 1,
    });

    return animalsResponse.data[0] || null;
  } catch (error) {
    console.log("Error fetching random animal: ", error);
    return null;
  }
}
