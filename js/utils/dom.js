/**
 * Selects one or more DOM elements.
 * Throws an error if no element is found.
 *
 * @param {string} selector - The CSS selector
 * @param {Object} options - Selection options
 * @param {boolean} [options.all=false] - If true, returns all matching elements
 * @param {Element|Document} [options.parent=document] - The parent element for the search
 *
 * @returns {Element|NodeList} The element or list of elements found
 *
 * @throws {Error} If no element is found
 */
export function selectElement(selector, { all = false, parent = document } = {}) {
  const result = all ? parent.querySelectorAll(selector) : parent.querySelector(selector);

  if (!result || (all && result.length === 0)) {
    throw new Error(`Element(s) not found for selector: "${selector}"`);
  }

  return result;
}
