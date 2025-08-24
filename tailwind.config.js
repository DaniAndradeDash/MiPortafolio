module.exports = {

    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                poppins: ['var(--font-poppins)', 'sans-serif'],
                montserrat: ['var(--font-montserrat)', 'sans-serif'],
            },
            screens: {
                // iPhone 14 Pro Max / 15 Pro Max / 16 Pro Max (430px)
                'iphone': '430px',

                // Samsung A51 / A71 (~412px)
                'samsung': '412px',

                // Tablets (iPad Air, Galaxy Tab, etc.)
                'tablet': '768px',

                // Desktop default
                'desktop': '1024px',

                // cobertura general para Android modernos
                'android': '390px',
            },

        },
    },
    plugins: [],
}