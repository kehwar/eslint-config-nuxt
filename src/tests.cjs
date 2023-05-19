/** @type {import("eslint").Linter.Config} */
module.exports = {

    /** Rule overrides */
    overrides: [
        {
            /**
             * Allow console statements in test files
             */
            files: ["**/*.test.ts"],
            rules: {
                /**
                 * Allow console statements in test files
                 */
                "no-console": 0,
            },
        },
    ],
};
