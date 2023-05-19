/** @type {import("eslint").Linter.Config} */
module.exports = {

    /** Rules */
    rules: {

        /** @see https://eslint.org/docs/latest/rules/array-bracket-newline */
        "array-bracket-newline": ["error", { "multiline": true } ],

        /** @see https://eslint.org/docs/latest/rules/array-bracket-spacing */
        "array-bracket-spacing": [
            "error", "never", {
                "singleValue": false,
                "objectsInArrays": true,
                "arraysInArrays": true,
            },
        ],

        /** @see https://eslint.org/docs/latest/rules/array-element-newline */
        "array-element-newline": ["error", "consistent"],

        /**
         * Disallow new Array()
         *
         * Use Array.from({length}) instead
         *
         * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-new-array.md
         */
        "unicorn/no-new-array": "error",

        /**
         * Prefer for…of over the forEach method
         *
         * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-for-each.md
         */
        "unicorn/no-array-for-each": "error",

        /**
         * Do not use a for loop that can be replaced with a for-of loop
         *
         * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-for-loop.md
         */
        "unicorn/no-for-loop": "error",

        /**
         * Enforce combining multiple Array#push() into one call
         *
         * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-push-push.md
         */
        "unicorn/no-array-push-push": "error",

        /**
         * Disallow Array#reduce() and Array#reduceRight()
         *
         * Array#reduce() and Array#reduceRight() usually result in hard-to-read and less performant code.
         * In almost every case, it can be replaced by .map, .filter, for-of loop or _.fromPairs.
         *
         * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-reduce.md
         */
        "unicorn/no-array-reduce": "error",

        /**
         * Prefer Set#has() over Array#includes() when checking for existence or non-existence
         *
         * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-set-has.md
         */
        "unicorn/prefer-set-has": "error",

        /**
         * Enforce explicitly comparing the length or size property of a value
         *
         * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/explicit-length-check.md
         */
        "unicorn/explicit-length-check": "error",

        /**
         * Spreading falsy values in object literals won't add any unexpected properties,
         * so it's unnecessary to add an empty object as fallback
         *
         * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-fallback-in-spread.md
         */
        "unicorn/no-useless-fallback-in-spread": "error",
    },
};
