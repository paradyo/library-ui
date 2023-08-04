export const titleToKebabCase = string => string
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, '-')
    .toLowerCase();

export const kebabToTitleCase = string => string.split('-')
    .map(
        (word) => word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');