/** @type {import("eslint").Linter.Config} */
module.exports = {
    /** Rules */
    rules: {
        /**
         * Enforce order of component top-level elements.
         *
         * Use <script> first, then <template>, then <style>
         *
         * @see https://eslint.vuejs.org/rules/component-tags-order.html
         */
        "vue/component-tags-order": [
            "error",
            {
                order: ["script", "template", "style"],
            },
        ],

        // Vue - Script

        /**
         * Enforce component API style
         *
         * Use <script setup> syntax
         *
         * @see https://eslint.vuejs.org/rules/component-api-style.html
         */
        "vue/component-api-style": ["error", ["script-setup"]],

        /**
         * Disallow use other than available lang
         *
         * Use <... lang="ts">
         *
         * @see https://eslint.vuejs.org/rules/block-lang.html
         */
        "vue/block-lang": [
            "error",
            {
                script: {
                    lang: "ts",
                },
            },
        ],

        /**
         * Enforce order of defineEmits and defineProps compiler macros
         *
         * Use defineProps first, then defineEmits
         *
         * @see https://eslint.vuejs.org/rules/define-macros-order.html
         */
        "vue/define-macros-order": [
            "error",
            {
                order: ["defineProps", "defineEmits"],
            },
        ],

        /**
         * Enforce declaration style of defineProps
         *
         * Use type-based
         *
         * @see https://eslint.vuejs.org/rules/define-props-declaration.html
         */
        "vue/define-props-declaration": ["error", "type-based"],

        /**
         * Enforce declaration style of defineEmits
         *
         * Use type-based
         *
         * @see https://eslint.vuejs.org/rules/define-emits-declaration.html
         */
        "vue/define-emits-declaration": ["error", "type-based"],

        /**
         * Enforce specific casing for custom event name
         *
         * Use camelCase
         *
         * @see https://eslint.vuejs.org/rules/custom-event-name-casing.html
         */
        "vue/custom-event-name-casing": [
            "error",
            "camelCase",
            {
                ignores: [],
            },
        ],

        // Vue - Template

        /**
         * Enforce consistent indentation in <template>
         *
         * @see https://eslint.vuejs.org/rules/html-indent.html
         */
        "vue/html-indent": ["error", 4],

        /**
         * Enforce specific casing for the component naming style in <template>
         *
         * Use PascalCase
         *
         * @see https://eslint.vuejs.org/rules/component-name-in-template-casing.html
         */
        "vue/component-name-in-template-casing": [
            "error",
            "PascalCase",
            {
                registeredComponentsOnly: true,
                ignores: [],
            },
        ],

        /**
         * Enforce self-closing style.
         *
         * Preferr using <tag />
         *
         * @see https://eslint.vuejs.org/rules/html-self-closing.html
         */
        "vue/html-self-closing": [
            "error",
            {
                html: {
                    void: "never",
                    normal: "always",
                    component: "always",
                },
                svg: "always",
                math: "always",
            },
        ],

        /**
         * Require the use of === and !== in <template>
         *
         * @see https://eslint.vuejs.org/rules/eqeqeq.html
         */
        "vue/eqeqeq": ["error", "always", { null: "ignore" }],

        /**
         * Enforce order of attributes
         *
         * With other attributes in alphabetical order
         *
         * @see https://eslint.vuejs.org/rules/attributes-order.html
         */
        "vue/attributes-order": [
            "error",
            {
                order: [
                    "DEFINITION",
                    "LIST_RENDERING",
                    "CONDITIONALS",
                    "RENDER_MODIFIERS",
                    "GLOBAL",
                    ["UNIQUE", "SLOT"],
                    "TWO_WAY_BINDING",
                    "OTHER_DIRECTIVES",
                    "OTHER_ATTR",
                    "EVENTS",
                    "CONTENT",
                ],
                alphabetical: true,
            },
        ],
    },
};
