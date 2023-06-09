/** @type {import("eslint").Linter.Config} */
module.exports = {
    /** Extensions */
    extends: [
        // Plugin Extensions

        "@nuxtjs/eslint-config-typescript", // https://github.com/nuxt/eslint-config
        "plugin:consistent-default-export-name/fixed", // https://github.com/minseoksuh/eslint-plugin-consistent-default-export-name
        "plugin:lodash/recommended", // https://github.com/wix-incubator/eslint-plugin-lodash
        "plugin:promise/recommended", // https://github.com/eslint-community/eslint-plugin-promise
        "plugin:tailwindcss/recommended", // https://github.com/francoismassart/eslint-plugin-tailwindcss

        // Rules

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
        "antfu", // https://github.com/antfu/eslint-config/tree/main/packages/eslint-plugin-antfu
        "consistent-default-export-name", // https://github.com/minseoksuh/eslint-plugin-consistent-default-export-name
        "editorconfig", // https://github.com/phanect/eslint-plugin-editorconfig
        "jsdoc", // https://github.com/gajus/eslint-plugin-jsdoc
        "no-relative-import-paths", // https://github.com/MelvinVermeer/eslint-plugin-no-relative-import-paths
        "lodash", // https://github.com/wix-incubator/eslint-plugin-lodash
        "promise", // https://github.com/eslint-community/eslint-plugin-promise
        "sonarjs", // https://github.com/SonarSource/eslint-plugin-sonarjs
        "tailwindcss", // https://github.com/francoismassart/eslint-plugin-tailwindcss
        "unicorn", // https://github.com/sindresorhus/eslint-plugin-unicorn
    ],
};
