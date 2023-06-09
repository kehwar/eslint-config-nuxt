/** @type {import("eslint").Linter.Config} */
module.exports = {
    /** Rules */
    rules: {
        /** Detect classnames which do not belong to Tailwind CSS */
        "tailwindcss/no-custom-classname": [
            "warn",
            {
                // Don't read any css files to improve performance
                cssFiles: [],

                // Add exception for primevue classes
                whitelist: ["pi", "pi-.*", "p-*"],
            },
        ],
    },
};
