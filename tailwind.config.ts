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
        cocoa: "#6b4f46"
      },
      boxShadow: {
        soft: "0 24px 80px rgba(163, 92, 103, 0.16)",
        card: "0 16px 48px rgba(132, 86, 86, 0.11)"
      },
      fontFamily: {
        sans: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Inter", "Arial", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
