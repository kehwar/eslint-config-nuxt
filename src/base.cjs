/** @type {import("eslint").Linter.Config} */
module.exports = {

    /** Extensions */
    extends: [

        // Base

        /**
         * Nuxt recommended rules
         *
         * @see https://github.com/nuxt/eslint-config#typescript
         */
        "@nuxtjs/eslint-config-typescript",

        // Custom rules

        "./arrays.cjs",
        "./blocks.cjs",
        "./comments.cjs",
        "./conditionals.cjs",
        "./declarations.cjs",
        "./editorconfig.cjs",
        "./errors.cjs",
        "./files.cjs",
        "./functions.cjs",
        "./imports.cjs",
        "./lodash.cjs",
        "./promises.cjs",
        "./regex.cjs",
        "./sonar.cjs",
        "./storyblok.cjs",
        "./style.cjs",
        "./tailwind.cjs",
        "./tests.cjs",
        "./vue.cjs",
    ],

    /** Plugins */
    plugins: [

        /** @see https://github.com/SonarSource/eslint-plugin-sonarjs */
        "sonarjs",

        /** @see https://github.com/eslint-community/eslint-plugin-promise */
        "promise",

        /** @see https://github.com/sindresorhus/eslint-plugin-unicorn */
        "unicorn",

        /** @see https://github.com/wix-incubator/eslint-plugin-lodash */
        "lodash",

        /** @see https://github.com/MelvinVermeer/eslint-plugin-no-relative-import-paths#installation */
        "no-relative-import-paths",

        /** @see https://github.com/minseoksuh/eslint-plugin-consistent-default-export-name */
        "consistent-default-export-name",

        /** @see https://github.com/phanect/eslint-plugin-editorconfig */
        "editorconfig",

        /** @see https://github.com/gajus/eslint-plugin-jsdoc */
        "jsdoc",

        /** @see https://github.com/francoismassart/eslint-plugin-tailwindcss */
        "tailwindcss",

        /** @see https://github.com/antfu/eslint-config/tree/main/packages/eslint-plugin-antfu */
        "antfu",
    ],

};
