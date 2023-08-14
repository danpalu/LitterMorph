/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                'primary': '#604D40',
                'primary-light': '#6d5748',
                'secondary': '#6A8595',
            },
        },
    },
    plugins: [],
}
