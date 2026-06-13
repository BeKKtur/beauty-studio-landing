import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        blush: {
          50: "#fff7f8",
          100: "#ffecef",
          200: "#ffd6dc",
          300: "#ffb3c0",
          400: "#fb8398",
          500: "#ee5f7b",
          600: "#d94365"
        },
        pearl: "#fffaf7",
        linen: "#f6ebe3",
        champagne: "#f4dfd2",
        cocoa: "#6b4f46",
        ink: "#2c211d"
      },
      boxShadow: {
        soft: "0 28px 90px rgba(138, 77, 88, 0.18)",
        card: "0 18px 54px rgba(111, 74, 68, 0.12)",
        premium: "0 28px 80px rgba(87, 56, 51, 0.16), inset 0 1px 0 rgba(255, 255, 255, 0.72)"
      },
      fontFamily: {
        sans: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Inter", "Arial", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
