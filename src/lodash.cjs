/** @type {import("eslint").Linter.Config} */
module.exports = {
    /** Custom rules */
    rules: {
        /** @see https://github.com/wix-incubator/eslint-plugin-lodash/blob/master/docs/rules/import-scope.md */
        "lodash/import-scope": ["error", "full"],

        /** @see https://github.com/wix-incubator/eslint-plugin-lodash/blob/master/docs/rules/prefer-lodash-typecheck.md */
        "lodash/prefer-lodash-typecheck": "off",

        /** @see https://github.com/wix-incubator/eslint-plugin-lodash/blob/master/docs/rules/prefer-lodash-chain.md */
        "lodash/prefer-lodash-chain": "error",

        /** @see https://github.com/wix-incubator/eslint-plugin-lodash/blob/master/docs/rules/preferred-alias.md */
        "lodash/preferred-alias": ["error"],

        /** @see https://github.com/wix-incubator/eslint-plugin-lodash/blob/master/docs/rules/chain-style.md */
        "lodash/chain-style": ["error", "explicit"],

        /** @see https://github.com/wix-incubator/eslint-plugin-lodash/blob/master/docs/rules/chaining.md */
        "lodash/chaining": ["error", "always", 2],

        /** @see https://github.com/wix-incubator/eslint-plugin-lodash/blob/master/docs/rules/prefer-reject.md */
        "lodash/prefer-reject": "error",

        /** @see https://github.com/wix-incubator/eslint-plugin-lodash/blob/master/docs/rules/prop-shorthand.md */
        "lodash/prop-shorthand": ["error", "never"],

        /** @see https://github.com/wix-incubator/eslint-plugin-lodash/blob/master/docs/rules/matches-prop-shorthand.md */
        "lodash/matches-prop-shorthand": ["error", "never"],
    },
};
