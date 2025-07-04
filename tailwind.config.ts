import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                darkblue: '#0A0F24',
            },
        },
    },
    plugins: [],
}
export default config
