module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
		extend: {
			colors: {
				primary: '#1a1b26',
				secondary: '#16161e',
				subcontrast: '#6183bb',
				contrast: '#0db9d7',
				symbols: '#b04f15',
			}
		},
  },
  variants: {
     extend: {},
   },
   plugins: [],
}
