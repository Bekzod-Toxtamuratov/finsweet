/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			container: {
				center: true,
				padding: '1rem', // Optional: Set default padding for the container
				screens: {
					sm: '600px',
					md: '728px',
					lg: '984px',
					xl: '1280px',
					'2xl': '1280px',
				},
				fontFamily: {
					pop: ['Poppins', 'sans-serif'], // Make sure to include a fallback font
				},
			},
		},
	},
	plugins: [],
}
