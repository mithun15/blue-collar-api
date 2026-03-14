import { createHmac } from "crypto";

/**
 * Generate the hash
 * @param {string} data
 * @param {string} salt
 * @param {string} algorithm
 * @returns {string} Hashed value
 */
export const hash = (data, salt, algorithm = "sha256") => {
  return createHmac(algorithm, salt).update(data).digest("hex");
};
