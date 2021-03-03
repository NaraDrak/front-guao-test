module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-pattern": "url('/banner.jpg')",
      }),
      //Custom color here
      colors: {
        footer: "#313131",
        whatsapp: "#61db89",
        primaryColor: "#c43a0e",
        activeColor: "#d16f4f",
      },
      screens: {
        xs: "360px",
      },
      variants: {
        extend: {},
      },
      plugins: [],
    },
  },
};
