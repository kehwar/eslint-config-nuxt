/** @type {import("eslint").Linter.Config} */
module.exports = {
    /** Rules */
    rules: {
        /** @see https://typescript-eslint.io/rules/brace-style */
        "@typescript-eslint/brace-style": ["error", "stroustrup", { allowSingleLine: false }],
        "brace-style": "off",

        /** @see https://eslint.org/docs/latest/rules/curly */
        curly: ["error", "multi-line"],
    },
};
