// eslint.config.js
import js from "@eslint/js";
import svelte from "eslint-plugin-svelte";
import prettier from "eslint-config-prettier";
import globals from "globals";
import ts from "typescript-eslint";
import svelteConfig from "./svelte.config.js";

export default ts.config(
    js.configs.recommended,
    ...ts.configs.recommended,
    ...svelte.configs.recommended,
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
                route: "readonly",
                App: "readonly",
                RebelScan: "readonly",
            },
        },
    },
    {
        files: [
            "resources/**/*.svelte",
            "resources/**/*.svelte.ts",
            "resources/**/*.svelte.js",
            "Modules/**/*.svelte",
            "Modules/**/*.svelte.ts",
            "Modules/**/*.svelte.js",
            "packages/**/*.svelte",
            "packages/**/*.svelte.ts",
            "packages/**/*.svelte.js",
        ],
        // See more details at: https://typescript-eslint.io/packages/parser/
        languageOptions: {
            parserOptions: {
                projectService: true,
                extraFileExtensions: [".svelte"], // Add support for additional file extensions, such as .svelte
                parser: ts.parser,

                // We recommend importing and specifying svelte.config.js.
                // By doing so, some rules in eslint-plugin-svelte will automatically read the configuration and adjust their behavior accordingly.
                // While certain Svelte settings may be statically loaded from svelte.config.js even if you don’t specify it,
                // explicitly specifying it ensures better compatibility and functionality.
                svelteConfig,
            },
        },
    },
    {
        rules: {
            "@typescript-eslint/no-unused-vars": [
                "error",
                { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
            ],
        },
    },
    {
        ignores: [
            "vendor",
            "node_modules",
            "public",
            "bootstrap/ssr",
            "tailwind.config.js",
            "resources/js/types",
            "resources/js/ziggy.js",
        ],
    },
    prettier,
);
