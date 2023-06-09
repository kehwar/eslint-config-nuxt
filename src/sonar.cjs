/** @type {import("eslint").Linter.Config} */
module.exports = {
    /** Rules */
    rules: {
        /** @see https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/cognitive-complexity.md */
        "sonarjs/cognitive-complexity": "error",

        /** @see https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-duplicate-string.md */
        "sonarjs/no-duplicate-string": "error",
    },
};
