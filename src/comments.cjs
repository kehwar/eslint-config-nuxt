/** @type {import("eslint").Linter.Config} */
module.exports = {

    /** Rules */
    rules: {
        /**
         * Controls how and whether jsdoc blocks can be expressed as single or multiple line blocks
         *
         * In particular, you force no text on first and last line of a block
         *
         * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/multiline-blocks.md
         */
        "jsdoc/multiline-blocks": [
            "error", {
                "noZeroLineText": true,
                "noFinalLineText": true,
            },
        ],

        /**
         * Require empty lines around comments
         *
         * @see https://eslint.org/docs/latest/rules/lines-around-comment
         */
        "@typescript-eslint/lines-around-comment": [
            "error",
            {
                beforeBlockComment: true,
                afterBlockComment: false,
                beforeLineComment: true,
                afterLineComment: false,
                allowBlockStart: true,
                allowObjectStart: true,
                allowArrayStart: true,
                allowClassStart: true,
                allowEnumStart: true,
                allowInterfaceStart: true,
                allowModuleStart: true,
                allowTypeStart: true,
                ignorePattern: "@ts.*",
            },
        ],
        "lines-around-comment": "off",
    },
};
