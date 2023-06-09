/** @type {import("eslint").Linter.Config} */
module.exports = {
    /** Rules */
    rules: {
        /**
         * Prefer ternary expressions over simple if-else statements
         *
         * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/prefer-ternary.md
         */
        "unicorn/prefer-ternary": "error",

        /**
         * Disallow if statements as the only statement in if blocks without else
         *
         * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-lonely-if.md
         */
        "unicorn/no-lonely-if": "error",

        /**
         * Enforce consistent linebreak style for operators
         *
         * @see https://eslint.org/docs/latest/rules/operator-linebreak
         */
        "operator-linebreak": ["error", "before"],

        /**
         * Disallow negated conditions
         *
         * Disabled
         *
         * Negated condtions are clearer when the you want the truth condition to be last in the chain
         *
         * Eg. `y != 0 ? x/y : 0` is clearer than `y === 0 ? 0 : x/y`
         *
         * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-negated-condition.md
         */
        "unicorn/no-negated-condition": "off",

        /**
         * Enforce consistent brace style for case clauses
         *
         * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/switch-case-braces.md
         */
        "unicorn/switch-case-braces": ["error", "always"],
    },
};
