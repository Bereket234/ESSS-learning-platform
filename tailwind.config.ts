import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
        'Quinary': '#707070',
        'Quaternary': '#ADADAD',
        'Tertiary': '#F8F7F4',
        'Secondary': '#E0F869',
        'Primary': '#072434',
    },

  },
  plugins: [],
}
export default config
