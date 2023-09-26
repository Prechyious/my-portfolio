/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                lightBg: "#F8F8F8F8",
                darkBg: "#00000000",
            },
        },
    },
    plugins: [],
};
