import truncate from "lodash/truncate";

/** The fallback truncate length */
export const defaultTruncateLength = 150;

/**
 * @desc Returns a string with three dots if it exceeds the limit given
 * @function truncate
 * @param {string} string The string to truncate
 * @param {number} limit The limit after the string will be truncated
 * @return {string} The truncated string
 */
export function truncateString(string, limit = defaultTruncateLength) {
  const dots = "...";
  return string.length > limit
    ? truncate(string, {
        length: limit - dots.length,
        omission: dots
      })
    : string;
}

export const ellipsis = {
  name: "ellipsis",
  bind: (el, binding) => {
    const element = el;
    const truncateLength = binding.expression;

    /** Replace the innerhtml with the truncated string */
    element.innerHTML = truncateString(element.innerHTML, truncateLength);
  }
};
