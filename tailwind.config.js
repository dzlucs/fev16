module.exports = {
  content: [
    "./src/**/*.{html,ts}", // Garante que o Tailwind seja aplicado nos arquivos HTML e TypeScript
  ],
  theme: {
    extend: {
      fontFamily: {
        playwrite: ['Playwrite CU', 'sans-serif'],
      }
    },
  },
  plugins: [],
}