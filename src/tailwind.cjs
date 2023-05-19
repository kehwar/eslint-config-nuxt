/** @type {import("eslint").Linter.Config} */
module.exports = {

    /** Extensions */
    extends: ["plugin:tailwindcss/recommended"],

    /** Rules */
    rules: {
        /**
         * Detect classnames which do not belong to Tailwind CSS
         */
        "tailwindcss/no-custom-classname": [
            "warn",
            {
                /** Don't read any css files to improve performance */
                cssFiles: [],

                /** Add exception for primevue classes */
                whitelist: [
                    "pi",
                    "pi-.*",
                    "p-button",
                    "p-button-.*",
                    "p-input",
                    "p-input-.*",
                    "p-inputgroup",
                    "p-inputgroup-addon",
                    "p-ripple",
                ],
            },
        ],

    },
};
