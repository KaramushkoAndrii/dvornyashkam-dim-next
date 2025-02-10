/**
 *
 * @param {string} slug
 * @returns string;
 */
export const getAnimalsCategoryLink = (slug) => `/animals/${slug}`;

/**
 *
 * @param {{category: string; slug: string;}} animal
 * @returns string;
 */
export const getAnimalLink = (animal) =>
  `/animals/${animal.category}/${animal.slug}`;
