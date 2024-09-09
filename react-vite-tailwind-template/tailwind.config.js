/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                title: ["Ubuntu", "sans-serif"],
                mono: ["IBM Plex Mono", "mono"]
            }
        },
    },
    corePlugins: {
        preflight: true,
    },
    plugins: [
        require("@tailwindcss/typography"),
        require('daisyui'),
    ],
    daisyui: {
        themes: [{
            CustomLight: {
                "primary": "#0A84D0",
                "primary-content": "#F0F0F0",

                "secondary": "#5FC0FB",
                "secondary-content": "#F0F0F0",

                "accent": "#007BB8",
                "accent-content": "#F0F0F0",

                "info": "#4AB4F7",
                "info-content": "#F0F0F0",

                "success": "#3DDA82",
                "success-content": "#F0F0F0",

                "warning": "#E1E105",
                "warning-content": "#606060",

                "error": "#FF6370",
                "error-content": "#F0F0F0",

                "neutral": "#606060",
                "neutral-content": "#F0F0F0",

                "base-100": "#F0F0F0",
                "base-200": "#E0E0E0",
                "base-300": "#C0C0C0",
                "base-content": "#606060",
            },
            CustomDark: {
                "primary": "#0A84D0",
                "primary-content": "#F0F0F0",

                "secondary": "#5FC0FB",
                "secondary-content": "#F0F0F0",

                "accent": "#007BB8",
                "accent-content": "#F0F0F0",

                "info": "#4AB4F7",
                "info-content": "#F0F0F0",

                "success": "#3DDA82",
                "success-content": "#F0F0F0",

                "warning": "#E1E105",
                "warning-content": "#606060",

                "error": "#FF6370",
                "error-content": "#F0F0F0",

                "neutral": "#A0A0A0",
                "neutral-content": "#F0F0F0",

                "base-100": "#2A2C3A",
                "base-200": "#232536",
                "base-300": "#1D1E2C",
                "base-content": "#F0F0F0",
            }
        }],
        base: true,
        styled: true,
        utils: true,
        prefix: "",
        logs: true,
        themeRoot: ":root",
    }
}

