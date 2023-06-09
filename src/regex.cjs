/** @type {import("eslint").Linter.Config} */
module.exports = {
    /** Rules */
    rules: {
        /** @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/better-regex.md */
        "unicorn/better-regex": ["error", { sortCharacterClasses: false }],
    },
};
