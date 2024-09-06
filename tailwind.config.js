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
        slider: "0 8px 8x rgba(95,171,56,0.600)",
        avatar: "-8px 8px 23.9px 0px rgba(0, 0, 0, 0.25)",
      },
      dropShadow: {
        "2xl": "0 8px 8px rgba(0, 0, 0, 0.15)",
        secondary: "0 8px 8px rgba(95,171,56,0.600)",
      },
      backgroundImage: {
        "hero-bg": "url('/assets/images/pizza_bg.svg')",
        "hero-bg-small": "url('/assets/images/hero_bg_small.svg')",
        "card-bg": "url('/assets/images/card_bg.svg')",
        "learn-more-bg": "url('/assets/images/button_bg.svg')",
        "price-bg": "url('/assets/images/price_bg.svg')",
        "avatar-bg": "url('/assets/images/avatar_bg.svg')",
      },
      backgroundSize: {
        '16': '40rem',
      }
    },
  },
  plugins: [],
};
