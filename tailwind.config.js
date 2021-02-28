module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-pattern": "url('/banner.jpg')",
      }),
    //Custom color added for footer
    colors: {
      footer: '#313131'
    }
    
    },
  variants: {
    extend: {},
  },
  plugins: [],
}
}
