/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.jsx'],
	theme: {
		fontSize: {
			xs: '0.875rem', // 14px
			base: '1rem', // 16px
			lg: '1.25rem', // 20px
			xl: '2rem', // 32px
			'2xl': '3rem' // 48px
		},
		fontFamily: {
			sans: ['Poppins'] // Default font
		},
		borderRadius: {
			sm: '0.25rem', // 4px
			DEFAULT: '0.5rem', // 8px
			md: '1rem', // 16px
			full: '100%'
		},
		boxShadow: {
			sm: '0px 0px 4px',
			DEFAULT: '0px 0px 8px',
			md: '0px 0px 12px'
		},
		extend: {}
	},
	plugins: []
};
