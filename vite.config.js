import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
    plugins: [
        laravel({
            input: [
                "resources/css/app.css",
                "vendor/rebelscan/core/resources/js/app.js",
            ],
            ssr: "vendor/rebelscan/core/resources/js/ssr.js",
            refresh: true,
        }),
        svelte({}),
    ],
    resolve: {
        alias: {
            "@": `${__dirname}/resources/js/`,
            "@rebelscan": `${__dirname}/vendor/rebelscan/core/resources/js/`,
            "@modules": `${__dirname}/Modules/`,
        },
    },
    build: {
        sourcemap: true,
        rollupOptions: {
            output: {
                manualChunks: (path) => {
                    switch (true) {
                        case path.includes("lucide"):
                            return "lucide";
                        case path.includes("node_modules"):
                            return "vendor";
                        case path.includes("Modules"):
                            return "modules";
                        case path.includes("components"):
                            return "components";
                    }
                },
            },
        },
    },
});
