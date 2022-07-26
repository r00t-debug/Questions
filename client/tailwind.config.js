module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#182330",
        "light-white": "rgba(255,255,255,0.17)",
        "light-slate": "rgba(226, 232, 240, 0.4)",
      },
      backgroundImage: {
        "waves": "url('/src/assets/wickedbackground.svg')",
      },
      boxShadow: {
        'box': '0 0px 60px -15px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
};