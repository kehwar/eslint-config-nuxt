/** @type {import("eslint").Linter.Config} */
module.exports = {

    /** Rules */
    rules: {

        /**
         * Enforce consistent brace style for blocks
         *
         * @see https://typescript-eslint.io/rules/brace-style
         */
        "@typescript-eslint/brace-style": ["error", "stroustrup", { allowSingleLine: false } ],
        "brace-style": "off",

        /**
         * Enforce consistent brace style for all control statements
         *
         * @see https://eslint.org/docs/latest/rules/curly
         */
        "curly": ["error", "multi-line"],
    },
};
