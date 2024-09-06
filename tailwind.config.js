/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFD042",
        secondary: "#5FAB38",
      },
      boxShadow: {
        custom: "0 4px 4px rgba(0, 0, 0, 0.15)",
      },
      backgroundImage: {
        "hero-bg": "url('/assets/images/pizza_bg.svg')",
        "hero-bg-small": "url('/assets/images/hero_bg_small.svg')",
        "card-bg": "url('/assets/images/card_bg.svg')",
        "learn-more-bg": "url('/assets/images/button_bg.svg')",
      },
    },
  },
  plugins: [],
};
