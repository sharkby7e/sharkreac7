module.exports = {
  content: ["./src/**/*.js", "./components/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dracula"],
  },
};
