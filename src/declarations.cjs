/** @type {import("eslint").Linter.Config} */
module.exports = {

    /** Rules */
    rules: {

        /**
         * Disallow the use of variables before they are defined
         *
         * Disabled to allow formatting for better readability. Eg. Define types last
         *
         * @see https://eslint.org/docs/latest/rules/no-use-before-define
         */
        "no-use-before-define": "off",

        /**
         * Enforce consistent naming convention, with some exceptions
         *
         * @see https://eslint.org/docs/latest/rules/camelcase
         */
        "camelcase": [
            "error",
            {
                allow: ["^UNSAFE_", "^U_", "^_", "^__"],
                properties: "never",
                ignoreGlobals: true,
                ignoreDestructuring: false,
                ignoreImports: false,
            },
        ],

        /**
         * Require const declarations for variables that are never reassigned after declared
         *
         * @see https://eslint.org/docs/latest/rules/prefer-const
         */
        "prefer-const": [
            "error",
            {
                destructuring: "all",
                ignoreReadBeforeAssign: false,
            },
        ],

        /**
         * Disallow unused variables, with exceptions
         *
         * @see https://typescript-eslint.io/rules/no-unused-vars/
         */
        "@typescript-eslint/no-unused-vars": [
            "error",
            {
                args: "all",
                argsIgnorePattern: "^_",
                vars: "all",
                varsIgnorePattern: "^_",
            },
        ],
        "no-unused-vars": "off",

        /**
         * Prefer Date.now()
         *
         * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-date-now.md
         */
        "unicorn/prefer-date-now": "error",

        /**
         * Enforce the style of numeric separators by correctly grouping digits
         *
         * Eg. 1_000_000 instead of 1000000
         *
         * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/numeric-separators-style.md
         */
        "unicorn/numeric-separators-style": "error",

        /**
         * Enforce the use of new for all builtins, except String, Number, Boolean, Symbol and BigInt
         *
         * Eg. new Object() instead of Object()
         *
         * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/new-for-builtins.md
         */
        "unicorn/new-for-builtins": "error",

        /**
         * Use destructured variables over properties
         *
         * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-destructuring.md
         */
        "unicorn/consistent-destructuring": "error",

        /**
         * Disallow useless undefined
         *
         * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-undefined.md
         */
        "unicorn/no-useless-undefined": "error",

        /**
         * Disallow use of chained assignment expressions
         *
         * Eg `a = b = c = 5` is disallowed
         *
         * @see https://eslint.org/docs/latest/rules/no-multi-assign
         */
        "no-multi-assign": "error",
    },

};
