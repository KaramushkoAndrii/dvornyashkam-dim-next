/**
 *
 * @param {string} slug
 * @returns string;
 */
export const getAnimalsCategoryLink = (slug) => `/animals/${slug}`;

/**
 *
 * @param {string} category
 * @param {string} slug
 * @returns string;
 */
export const getAnimalLink = (category, slug) => `/animals/${category}/${slug}`;
