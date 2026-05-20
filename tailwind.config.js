/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          bone: '#FAF8F5',
          black: '#151515',
          'mist-green': '#8B9D83',
          taupe: '#9C8F84',
          terracotta: '#A34C32',
          'dessert-sand': '#DEC8B3',
        },
        surface: {
          base: '#FAF8F5',
          panel: '#FFFFFF',
          soft: '#DEC8B3',
          inverse: '#151515',
          overlay: 'rgba(21, 21, 21, 0.52)',
        },
        text: {
          primary: '#151515',
          secondary: '#9C8F84',
          muted: '#B7AEA7',
          inverse: '#FAF8F5',
          accent: '#A34C32',
          success: '#8B9D83',
        },
        border: {
          primary: '#9C8F84',
          soft: '#D8CDC3',
          strong: '#151515',
          accent: '#A34C32',
          success: '#8B9D83',
        },
        accent: {
          primary: '#A34C32',
          soft: '#DEC8B3',
          success: '#8B9D83',
          successSoft: '#E4EBE1',
        },
      },
      boxShadow: {
        panel: '0 18px 45px rgba(21, 21, 21, 0.08)',
        soft: '0 10px 30px rgba(156, 143, 132, 0.16)',
      },
      fontSize: {
        display: ['28px', { lineHeight: '1.2', fontWeight: '700' }],
        h1: ['22px', { lineHeight: '1.3', fontWeight: '700' }],
        h2: ['18px', { lineHeight: '1.4', fontWeight: '600' }],
        h3: ['16px', { lineHeight: '1.5', fontWeight: '600' }],
        body: ['14px', { lineHeight: '1.6', fontWeight: '400' }],
        small: ['12px', { lineHeight: '1.5', fontWeight: '400' }],
      },
    },
  },
  plugins: [],
};
