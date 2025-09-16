/**
 * Converts a given string to camelCase format.
 *
 * - Splits the input string on non-alphanumeric characters.
 * - Retains acronyms (all-uppercase words) as-is except for the first word, which is lowercased.
 * - The first word is always lowercased.
 * - Subsequent words are capitalized (first letter uppercase, rest lowercase), unless they are acronyms.
 * - Returns an empty string if input is null or undefined.
 *
 * @param {string|null|undefined} input - The string to convert to camelCase. Can be a string, null, or undefined.
 * @returns {string} The camelCase formatted string. Returns an empty string for null or undefined input.
 * @throws {Error} Throws if the input is not a string, null, or undefined.
 *
 * @example
 * camelCase('Andy Nguyen AWS'); // 'andyNguyenAWS'
 * camelCase('andy_nguyen+AWS'); // 'andyNguyenAWS'
 * camelCase(null); // ''
 * camelCase(undefined); // ''
 * camelCase('API_response_data'); // 'apiResponseData'
 */

/**
 * Converts a given string to dot.case format.
 *
 * - Splits the input string on transitions from lowercase to uppercase, numbers, or non-alphanumeric characters.
 * - Handles camelCase, snake_case, and space-separated words.
 * - Converts all words to lowercase and joins them with dots.
 * - Returns an empty string if input is null or undefined.
 *
 * @param {string|null|undefined} input - The string to convert to dot.case. Can be a string, null, or undefined.
 * @returns {string} The dot.case formatted string. Returns an empty string for null or undefined input.
 * @throws {Error} Throws if the input is not a string, null, or undefined.
 *
 * @example
 * dotCase('Andy Nguyen AWS'); // 'andy.nguyen.aws'
 * dotCase('andy_nguyen+AWS'); // 'andy.nguyen.aws'
 * dotCase(null); // ''
 * dotCase(undefined); // ''
 * dotCase('API_response_data'); // 'api.response.data'
 */
function camelCase(input) {
    if (input === undefined || input === null) return '';
    if (typeof input !== 'string') {
        throw new Error('Input must be a string, undefined, or null.');
    }

    // Split on non-alphanumeric characters (excluding letters and numbers)
    const words = input
        .split(/[^a-zA-Z0-9]+/)
        .filter(Boolean);

    if (words.length === 0) return '';

    return words
        .map((word, idx) => {
            // Retain acronyms (all uppercase words)
            if (word === word.toUpperCase()) {
                return idx === 0
                    ? word.toLowerCase()
                    : word;
            }
            // Capitalize first letter except for the first word
            if (idx === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

// Example usage:
// console.log(camelCase('Andy Nguyen AWS')); // 'andyNguyenAWS'
// console.log(camelCase('andy_nguyen+AWS')); // 'andyNguyenAWS'
// console.log(camelCase(null)); // ''
// console.log(camelCase(undefined)); // ''
// console.log(camelCase('API_response_data')); // 'apiResponseData'
function dotCase(input) {
    if (input === undefined || input === null) return '';
    if (typeof input !== 'string') {
        throw new Error('Input must be a string, undefined, or null.');
    }

    // Split on transitions from lowercase to uppercase, numbers, or non-alphanumeric
    const words = input
        .replace(/([a-z0-9])([A-Z])/g, '$1 $2') // camelCase to space
        .replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, '$1 $2') // acronyms to space
        .split(/[^a-zA-Z0-9]+|[\s_]+/) // split on non-alphanum and underscores
        .filter(Boolean);

    return words.map(w => w.toLowerCase()).join('.');
}

// Example usage:
// console.log(dotCase('Andy Nguyen AWS')); // 'andy.nguyen.aws'
// console.log(dotCase('andy_nguyen+AWS')); // 'andy.nguyen.aws'
// console.log(dotCase(null)); // ''
// console.log(dotCase(undefined)); // ''
// console.log(dotCase('API_response_data')); // 'api.response.data'

/**
 * Converts a given string to kebab-case format.
 *
 * - Splits the input string on transitions from lowercase to uppercase, numbers, or non-alphanumeric characters.
 * - Handles camelCase, snake_case, and space-separated words.
 * - Converts all words to lowercase and joins them with hyphens.
 * - Returns an empty string if input is null or undefined.
 *
 * @param {string|null|undefined} input - The string to convert to kebab-case. Can be a string, null, or undefined.
 * @returns {string} The kebab-case formatted string. Returns an empty string for null or undefined input.
 * @throws {Error} Throws if the input is not a string, null, or undefined.
 *
 * @example
 * toKebabCase('Andy Nguyen AWS'); // 'andy-nguyen-aws'
 * toKebabCase('andy_nguyen+AWS'); // 'andy-nguyen-aws'
 * toKebabCase(null); // ''
 * toKebabCase(undefined); // ''
 * toKebabCase('API_response_data'); // 'api-response-data'
 */
function toKebabCase(input) {
    if (input === undefined || input === null) return '';
    if (typeof input !== 'string') {
        throw new Error('Input must be a string, undefined, or null.');
    }

    // Split on camelCase, acronyms, numbers, and non-alphanumeric characters
    const words = input
        .replace(/([a-z0-9])([A-Z])/g, '$1 $2') // camelCase to space
        .replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, '$1 $2') // acronyms to space
        .split(/[^a-zA-Z0-9]+|[\s_]+/) // split on non-alphanum and underscores
        .filter(Boolean);

    return words.map(w => w.toLowerCase()).join('-');
}

// Example usage:
// console.log(toKebabCase('Andy Nguyen AWS')); // 'andy-nguyen-aws'
// console.log(toKebabCase('andy_nguyen+AWS')); // 'andy-nguyen-aws'
// console.log(toKebabCase(null)); // ''
// console.log(toKebabCase(undefined)); // ''
// console.log(toKebabCase('API_response_data')); // 'api-response-data'