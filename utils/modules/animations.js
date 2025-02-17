/**
 *
 * @param {number} ms
 * @returns {Promise<any>}
 */
export const sleep = (ms = 0) =>
  new Promise((resolve) => setTimeout(resolve, ms));
