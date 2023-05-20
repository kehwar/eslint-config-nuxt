/** @type {import("eslint").Linter.Config} */
module.exports = {

    /** Rule overrides */
    overrides: [
        /** Override for storyblok components */
        {
            files: ["storyblok/*.ts"],
            rules: {
                "vue/multi-word-component-names": "off",
            },
        },
    ],
};
