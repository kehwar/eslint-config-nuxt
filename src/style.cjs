/** @type {import("eslint").Linter.Config} */
module.exports = {
    /** Rules */
    rules: {
        /**
         * Require or disallow semicolons instead of ASI
         *
         * @see https://typescript-eslint.io/rules/semi
         */
        "@typescript-eslint/semi": ["error", "always"],
        semi: "off",

        /**
         * Enforce the consistent use of quotes
         *
         * @see https://typescript-eslint.io/rules/quotes
         */
        "@typescript-eslint/quotes": [
            "error",
            "double",
            {
                avoidEscape: true,
                allowTemplateLiterals: true,
            },
        ],
        quotes: "off",

        /**
         * Require or disallow trailing commas
         *
         * @see https://typescript-eslint.io/rules/comma-dangle
         */
        "@typescript-eslint/comma-dangle": [
            "error",
            {
                arrays: "always-multiline",
                objects: "always-multiline",
                imports: "always-multiline",
                exports: "always-multiline",
                functions: "never",
                enums: "always-multiline",
                generics: "never",
                tuples: "always-multiline",
            },
        ],
        "comma-dangle": "off",

        /**
         * Enforce consistent comma style
         *
         * @see https://eslint.org/docs/latest/rules/comma-style
         */
        "comma-style": [
            "error",
            "last",
            {
                exceptions: {
                    ArrayExpression: false,
                    ArrayPattern: false,
                    ArrowFunctionExpression: false,
                    CallExpression: false,
                    FunctionDeclaration: false,
                    FunctionExpression: false,
                    ImportDeclaration: false,
                    ObjectExpression: false,
                    ObjectPattern: false,
                    VariableDeclaration: false,
                    NewExpression: false,
                },
            },
        ],

        /**
         * Require quotes around object literal property names
         *
         * @see https://eslint.org/docs/latest/rules/quote-props
         */
        "quote-props": ["error", "consistent"],
    },
};
