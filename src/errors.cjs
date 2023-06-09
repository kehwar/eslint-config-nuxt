/** @type {import("eslint").Linter.Config} */
module.exports = {
    /** Rules */
    rules: {
        /**
         * Enforce a specific parameter name in catch clauses
         *
         * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/catch-error-name.md
         */
        "unicorn/catch-error-name": "error",

        /**
         * Prefer omitting the catch binding parameter
         *
         * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-optional-catch-binding.md
         */
        "unicorn/prefer-optional-catch-binding": "error",
    },
};
