/** @type {import("eslint").Linter.Config} */
module.exports = {

    /** Rules */
    rules: {

        /**
         * Disallow empty files
         *
         * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-empty-file.md
         */
        "unicorn/no-empty-file": "error",

        /**
         * Enforce a case style for filenames
         *
         * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/filename-case.md
         */
        "unicorn/filename-case": ["error", { "case": "kebabCase" } ],
    },

    /** Rule overrides */
    overrides: [
        /** Override for remoteFunctionFn server files */
        {
            files: ["*.server.ts"],
            rules: {
                /**
                 * Use snakeCase for filenames since they will be used as variable names
                 *
                 * @see https://github.com/wobsoriano/nuxt-remote-fn/issues/5
                 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/filename-case.md
                 */
                "unicorn/filename-case": ["error", { "case": "snakeCase" } ],
            },
        },
    ],
};
