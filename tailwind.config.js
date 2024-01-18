/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "rgb(45,39,39)",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#3d4451",
          // "base-100": "#ffffff",
          // "base-100": "#1F1717",
          "base-100": "#4D4D4D",

          // "base-200": "rgba(252, 245, 237, 0.97)",
        },
      },
      "light",
      "dark",
      "cupcake",
      "retro",
      "acid",
      "corporate",
      "dracula",
    ],
  },
};
