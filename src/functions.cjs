/** @type {import("eslint").Linter.Config} */
module.exports = {
    /** Rules */
    rules: {
        /**
         * Require parentheses around arrow function arguments
         *
         * @see https://eslint.org/docs/latest/rules/arrow-parens
         */
        "arrow-parens": ["error", "always"],

        /**
         * Require or disallow spacing between function identifiers and their invocations
         *
         * @see https://typescript-eslint.io/rules/func-call-spacing
         */
        "@typescript-eslint/func-call-spacing": ["error", "never"],
        "func-call-spacing": "off",

        /**
         * Enforce consistent spacing before function parenthesis
         *
         * @see https://typescript-eslint.io/rules/space-before-function-paren
         */
        "@typescript-eslint/space-before-function-paren": "error",
        "space-before-function-paren": "off",

        /**
         * Prevent passing a function reference directly to iterator methods
         *
         * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-callback-reference.md
         */
        "unicorn/no-array-callback-reference": "error",

        /**
         * Prefer Number static properties over global ones
         *
         * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-number-properties.md
         */
        "unicorn/prefer-number-properties": "error",

        /**
         * Prefer String#slice() over String#substr() and String#substring()
         *
         * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-slice.md
         */
        "unicorn/prefer-string-slice": "error",

        /**
         * Move function definitions to the highest possible scope
         *
         * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-function-scoping.md
         */
        "unicorn/consistent-function-scoping": ["error", { checkArrowFunctions: false }],

        /**
         * Enforce top-level functions to be declared with function keyword
         *
         * @see https://github.com/antfu/eslint-config/blob/main/packages/eslint-plugin-antfu/src/rules/top-level-function.test.ts
         */
        "antfu/top-level-function": "error",
    },
};
