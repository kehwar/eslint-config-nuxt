/** @type {import("eslint").Linter.Config} */
module.exports = {
    /** Rules */
    rules: {
        /**
         * Improve regexes by making them shorter, consistent, and safer
         *
         * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/better-regex.md
         */
        "unicorn/better-regex": ["error", { sortCharacterClasses: false }],
    },
};
