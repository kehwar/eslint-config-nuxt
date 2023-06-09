/** @type {import("eslint").Linter.Config} */
module.exports = {

    /** Custom rules */
    rules: {

        /**
         * Prefer using one import scope
         *
         * @see https://github.com/wix-incubator/eslint-plugin-lodash/blob/master/docs/rules/import-scope.md
         */
        "lodash/import-scope": ["error", "full"],

        /**
         * Prefer Lodash typecheck
         *
         * Disabled, because it's more verbose than native typecheck
         *
         * @see https://github.com/wix-incubator/eslint-plugin-lodash/blob/master/docs/rules/prefer-lodash-typecheck.md
         */
        "lodash/prefer-lodash-typecheck": "off",

        /**
         * Prefer lodash chain
         *
         * When chaining methods, don't mix vanilla JS and Lodash methods
         *
         * @see https://github.com/wix-incubator/eslint-plugin-lodash/blob/master/docs/rules/prefer-lodash-chain.md
         */
        "lodash/prefer-lodash-chain": "error",

        /**
         * Preferred Alias
         *
         * Do not use aliases to avoid inconsistent code
         *
         * Each is used instead of forEach to not conflict with no forEach eslint rule
         *
         * @see https://github.com/wix-incubator/eslint-plugin-lodash/blob/master/docs/rules/preferred-alias.md
         */
        "lodash/preferred-alias": ["error"],

        /**
         * Chain Style
         *
         * @see https://github.com/wix-incubator/eslint-plugin-lodash/blob/master/docs/rules/chain-style.md
         */
        "lodash/chain-style": ["error", "explicit"],

        /**
         * Chaining
         *
         * @see https://github.com/wix-incubator/eslint-plugin-lodash/blob/master/docs/rules/chaining.md
         */
        "lodash/chaining": ["error", "always", 2],

        /**
         * Prefer reject
         *
         * @see https://github.com/wix-incubator/eslint-plugin-lodash/blob/master/docs/rules/prefer-reject.md
         */
        "lodash/prefer-reject": "error",

        /**
         * Property shorthand
         *
         * Don't use shorthands, because it disables type checking
         *
         * @see https://github.com/wix-incubator/eslint-plugin-lodash/blob/master/docs/rules/prop-shorthand.md
         */
        "lodash/prop-shorthand": ["error", "never"],

        /**
         * Matches property shorthand
         *
         * Don't use shorthands, because it disables type checking
         *
         * @see https://github.com/wix-incubator/eslint-plugin-lodash/blob/master/docs/rules/matches-prop-shorthand.md
         */
        "lodash/matches-prop-shorthand": ["error", "never"],

    },
};
