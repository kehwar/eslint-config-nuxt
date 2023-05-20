/** @type {import("eslint").Linter.Config} */
module.exports = {

    /** Extensions */
    extends: ["plugin:consistent-default-export-name/fixed"],

    /** Rules */
    rules: {

        /**
         * Enforce absolute paths in imports
         *
         * @see https://github.com/MelvinVermeer/eslint-plugin-no-relative-import-paths#rule-options
         */
        "no-relative-import-paths/no-relative-import-paths": ["warn", { allowSameFolder: false, prefix: "~" } ],

        /**
         * Enforce absolute paths in named exports
         */
        "no-restricted-syntax": [
            "error",
            {
                selector: "ExportNamedDeclaration[source.value=/\\.+\\u002F/]",
                message: "Do not use relative paths inside named exports",
            },
        ],

        /**
         * Enforce a convention in the order of import statements
         *
         * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
         */
        "import/order": [
            "error",
            {
                groups: ["builtin", "external", ["internal", "unknown"], ["parent", "sibling", "index"], ["object", "type"] ],
                alphabetize: {
                    order: "asc",
                    caseInsensitive: true,
                },
            },
        ],

        /**
         * Enforces having one empty line after the last top-level import statement
         *
         * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/newline-after-import.md
         */
        "import/newline-after-import": ["error", { considerComments: true } ],

        /**
         * Disallow specified modules when loaded by import
         *
         * @see https://eslint.org/docs/latest/rules/no-restricted-imports
         */
        "no-restricted-imports": [
            "error",
            {
                /**
                 * Dayjs must be used through the dayjs facade to use the correct locale and plugins
                 */
                name: "dayjs",
                message: "Use dayjs facade instead.",
            },
        ],

        /**
         * Enforces default import name to match filename
         *
         * Name matching is case-insensitive, and characters ._- are stripped
         *
         * @see https://github.com/minseoksuh/eslint-plugin-consistent-default-export-name/blob/main/docs/rules/default-import-match-filename.md
         */
        "consistent-default-export-name/default-import-match-filename": [
            "error",
            {
                ignorePaths: ["**/*.sql"],
            },
        ],

        /**
         * Prefer using the node: protocol when importing Node.js builtin modules
         *
         * When importing builtin modules, it's better to use the node: protocol as it makes it perfectly clear that the package is a Node.js builtin module.
         *
         * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/prefer-node-protocol.md
         */
        "unicorn/prefer-node-protocol": "error",

        /**
         * Prefer export…from when re-exporting
         *
         * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-export-from.md
         */
        "unicorn/prefer-export-from": ["error", { ignoreUsedVariables: true } ],

        /**
         * Enforce consistent usage of type imports
         *
         * @see https://typescript-eslint.io/rules/consistent-type-imports/
         */
        "@typescript-eslint/consistent-type-imports": "error",

        /**
         * Prefer JavaScript modules (ESM) over CommonJS
         *
         * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-module.md
         */
        "unicorn/prefer-module": "error",

    },

    /** Rule overrides */
    overrides: [
        /** Override for common Javascript files */
        {
            files: ["*.js"],
            rules: {
                /**
                 * Disable prefer modules
                 *
                 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-module.md
                 */
                "unicorn/prefer-module": "off",

                /**
                 * Allow require statement
                 *
                 * @see https://typescript-eslint.io/rules/no-var-requires/
                 */
                "@typescript-eslint/no-var-requires": "off",
            },
        },
        {
            /**
             * Overrides for nuxt.config and local modules
             *
             * Cannot use absolute paths in imports inside nuxt.config or local modules
             *
             * @see https://github.com/nuxt/nuxt/issues/20539
             */
            files: ["nuxt.config.ts", "**/modules/**"],
            rules: {
                /**
                 * Enable relative imports
                 */
                "no-relative-import-paths/no-relative-import-paths": "off",

                /**
                 * Ban absolute paths
                 */
                "no-restricted-syntax": [
                    "error",
                    {
                        selector: "ImportDeclaration[source.value=/~+\\u002F/]",
                        message: "Do not use absolute paths inside nuxt.config or modules.",
                    },
                ],
            },
        },
    ],
};
