import React from "react";
import "../css/app.css";

import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createRoot } from "react-dom/client";

const appName =
    import.meta.env.VITE_APP_NAME || "Solar Wave Energy";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,

    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.tsx`,
            import.meta.glob("./Pages/**/*.tsx")
        ),

    setup({ el, App, props }) {
        createRoot(el).render(
            <>
                <head>
                    <meta
                        name="description"
                        content="Solar Wave Energy provides residential, commercial and industrial solar energy solutions, rooftop solar panel installation and maintenance services in Lucknow, Uttar Pradesh."
                    />

                    <meta
                        name="keywords"
                        content="Solar Wave Energy, solar energy Lucknow, solar panels Lucknow, solar installation Lucknow, rooftop solar Lucknow, solar company Lucknow, solar panel installation, solar energy Uttar Pradesh, residential solar, commercial solar, industrial solar"
                    />

                    <meta
                        name="author"
                        content="Solar Wave Energy"
                    />

                    <meta
                        name="robots"
                        content="index, follow"
                    />

                    <meta
                        name="googlebot"
                        content="index, follow"
                    />

                    <meta
                        property="og:title"
                        content="Solar Wave Energy | Solar Panel & Solar Energy Solutions in Lucknow"
                    />

                    <meta
                        property="og:description"
                        content="Solar Wave Energy provides reliable solar panel installation and solar energy solutions for homes, businesses and industries in Lucknow, Uttar Pradesh."
                    />

                    <meta
                        property="og:type"
                        content="website"
                    />

                    <meta
                        property="og:site_name"
                        content="Solar Wave Energy"
                    />

                    <meta
                        name="twitter:card"
                        content="summary_large_image"
                    />

                    <meta
                        name="twitter:title"
                        content="Solar Wave Energy | Solar Solutions in Lucknow"
                    />

                    <meta
                        name="twitter:description"
                        content="Residential, commercial and industrial solar energy solutions in Lucknow, Uttar Pradesh."
                    />

                    <meta
                        name="theme-color"
                        content="#07131f"
                    />
                </head>

                <App {...props} />
            </>
        );
    },

    progress: {
        color: "#f5b942",
    },
});