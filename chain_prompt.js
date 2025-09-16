function toKebabCase(input) {
    if (typeof input !== 'string') {
        throw new Error("Invalid Input: expected a string.");
    }
    // Replace all non-alphanumeric characters with spaces, then split and join with '-'
    return input
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/gi, ' ')
        .trim()
        .replace(/\s+/g, '-');
}

// Example usage:
// toKebabCase('Andy Nguyen AWS') => 'andy-nguyen-aws'
// toKebabCase('andy_nguyen+AWS') => 'andy-nguyen-aws'