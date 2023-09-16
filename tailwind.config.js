/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#00B835',
                second: '#B9D456',
                white2: '#FAFCF3',
                black2: '#353535',
            },
            dropShadow: {
                'upper': '0px 28px 27px rgba(0, 0, 0, 0.25)',
                'nav' : '0px 0px 5px rgba(0, 0, 0, 0.1)'
              }
        },
    },
    plugins: [],
};
